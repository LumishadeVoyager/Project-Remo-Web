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

# Doubao watermark is a fixed-size raster overlay anchored to the corners.
# These dimensions cover the watermark across all aspect ratios Doubao outputs
# (1280x720 16:9, 960x720 4:3, 720x1280 9:16, etc.) without scaling.
WATERMARK_W = 320      # bottom-right watermark width  in pixels
WATERMARK_H = 90       # bottom-right watermark height in pixels
TOPLEFT_W   = 280      # top-left (defensive) width
TOPLEFT_H   = 72       # top-left (defensive) height
EDGE_PAD    = 2        # delogo cannot touch the very edge

DOUBAO_RE = re.compile(r"^(V\d{2})-豆包(?:生成)?\.mp4$", re.IGNORECASE)


def probe_size(src: Path) -> tuple[int, int] | None:
    """Return (width, height) of the first video stream, or None on failure."""
    import subprocess
    cmd = [FFMPEG, "-i", str(src), "-hide_banner"]
    r = subprocess.run(cmd, capture_output=True)
    # ffmpeg writes stream info to stderr; decode latin-1 to avoid GBK errors
    stderr = (r.stderr or b"").decode("latin-1", errors="ignore")
    m = re.search(r"Video:.*?,\s*(\d+)x(\d+)", stderr)
    if not m:
        return None
    return int(m.group(1)), int(m.group(2))


def build_delogo(width: int, height: int) -> str:
    """Build delogo filter chain anchored to corners, clamped to the frame."""
    # Bottom-right box, anchored to the corner with EDGE_PAD margin
    br_x = max(0, width  - WATERMARK_W - EDGE_PAD)
    br_y = max(0, height - WATERMARK_H - EDGE_PAD)
    br_w = min(WATERMARK_W, width  - br_x - EDGE_PAD)
    br_h = min(WATERMARK_H, height - br_y - EDGE_PAD)
    # Top-left box
    tl_w = min(TOPLEFT_W, width  - 2 * EDGE_PAD)
    tl_h = min(TOPLEFT_H, height - 2 * EDGE_PAD)
    return (
        f"delogo=x={br_x}:y={br_y}:w={br_w}:h={br_h},"
        f"delogo=x={EDGE_PAD}:y={EDGE_PAD}:w={tl_w}:h={tl_h}"
    )


def process_doubao(src: Path, dst: Path) -> bool:
    """Run ffmpeg delogo on a Doubao-generated video. Returns True on success."""
    import subprocess
    size = probe_size(src)
    if not size:
        print(f"    could not probe {src.name}")
        return False
    w, h = size
    delogo_chain = build_delogo(w, h)
    print(f"  -> removing watermark: {src.name} ({w}x{h})  ->  {dst.name}")
    cmd = [
        FFMPEG, "-y", "-i", str(src),
        "-vf", delogo_chain,
        "-c:v", "libx264", "-preset", "medium", "-crf", "20",
        "-c:a", "copy",
        "-movflags", "+faststart",
        str(dst),
    ]
    r = subprocess.run(cmd, capture_output=True)
    if r.returncode != 0:
        stderr = (r.stderr or b"").decode("latin-1", errors="ignore")
        print(f"    ffmpeg failed:\n{stderr[-800:]}")
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
