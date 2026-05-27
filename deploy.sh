#!/usr/bin/env bash
# Deploy Project Remo Web/ to GitHub Pages.
#
# Usage:
#   ./deploy.sh "commit message"
#
# Multi-line message with heredoc:
#   ./deploy.sh "$(cat <<'EOF'
#   subject line
#
#   body paragraph
#   EOF
#   )"
#
# Stages every change in Web/, commits with the given message, then
# pushes to origin/main. GitHub Pages auto-deploys from main, live
# site updates within ~1-2 minutes.

set -e

# Always run from the directory this script lives in, regardless of
# where the user invokes it from.
cd "$(dirname "$0")"

# ---------------------------------------------------------------- args
if [ -z "$1" ]; then
  echo "Usage: $0 \"commit message\""
  echo
  echo "Pending changes:"
  git status --short
  exit 1
fi

# --------------------------------------------------------- short-circuit
if [ -z "$(git status --porcelain)" ]; then
  echo "Nothing to commit. Working tree clean."
  exit 0
fi

# ---------------------------------------------------------- show & stage
echo "=== Pending changes ==="
git status --short
echo

git add -A
git commit -m "$1"

# ------------------------------------------------------------------ push
echo
echo "Pushing to origin/main..."
git push origin main

# --------------------------------------------------------------- summary
echo
echo "Done. Latest commit:"
git log -1 --pretty=format:"  %h  %s"
echo
echo "Live at: https://lumishadevoyager.github.io/Project-Remo-Web/"
