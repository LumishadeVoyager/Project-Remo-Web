"""
Process raw videos in this directory and produce watermark-free Vxx.mp4 files.

Naming rules
------------
- Doubao (豆包) generated videos:
    Name source file:  V01-豆包.mp4  (or  V01-豆包生成.mp4 — both accepted)
    Script outputs:    V01.mp4       — with watermarks removed via ffmpeg delogo

- Non-Doubao videos with NO watermark:
    Drop them in already named  V01.mp4 / V02.mp4 …  — script skips them.

- Non-Doubao videos with a DIFFERENT watermark style:
    Add a new branch below describing the watermark area and crop strategy.

Usage
-----
    python process_videos.py            # process all -豆包 files in this dir
    python process_videos.py V03        # only process V03
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

import imageio_ffmpeg

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
HERE = Path(__file__).parent

# Doubao watermark zones for the dominant 1280x720 output size.
# delogo coordinates are top-left of the box to obscure.
# Conservative boxes that cover both the static lower-right "豆包AI生成"
# logo and any occasional upper-left timestamp.
DOUBAO_DELOGO = (
    "delogo=x=970:y=648:w=305:h=68,"    # bottom-right "豆包AI生成" + logo
    "delogo=x=5:y=5:w=230:h=60"          # top-left (defensive, often empty)
)

DOUBAO_RE = re.compile(r"^(V\d{2})-豆包(?:生成)?\.mp4$", re.IGNORECASE)


def process_doubao(src: Path, dst: Path) -> bool:
    """Run ffmpeg delogo on a Doubao-generated video. Returns True on success."""
    import subprocess
    print(f"  → removing watermark: {src.name}  →  {dst.name}")
    cmd = [
        FFMPEG, "-y", "-i", str(src),
        "-vf", DOUBAO_DELOGO,
        "-c:v", "libx264", "-preset", "medium", "-crf", "20",
        "-c:a", "copy",
        "-movflags", "+faststart",
        str(dst),
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"    ffmpeg failed:\n{result.stderr[-800:]}")
        return False
    return True


def find_sources(filter_slot: str | None = None) -> list[tuple[Path, Path, str]]:
    """Discover all source files and the kind of processing they need."""
    jobs: list[tuple[Path, Path, str]] = []
    for entry in HERE.iterdir():
        if not entry.is_file() or entry.suffix.lower() != ".mp4":
            continue
        m = DOUBAO_RE.match(entry.name)
        if not m:
            continue
        slot = m.group(1).upper()
        if filter_slot and slot != filter_slot.upper():
            continue
        dst = HERE / f"{slot}.mp4"
        jobs.append((entry, dst, "doubao"))
    return jobs


def main(argv: list[str]) -> int:
    filter_slot = argv[1] if len(argv) > 1 else None
    jobs = find_sources(filter_slot)
    if not jobs:
        print(f"No source files matched (filter={filter_slot or 'all'}).")
        print(f"Expected names like V01-豆包.mp4 in {HERE}")
        return 0

    print(f"Found {len(jobs)} source video(s) to process:")
    ok = 0
    for src, dst, kind in jobs:
        if kind == "doubao":
            if process_doubao(src, dst):
                ok += 1
    print(f"\nDone: {ok}/{len(jobs)} succeeded.")
    return 0 if ok == len(jobs) else 1


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
