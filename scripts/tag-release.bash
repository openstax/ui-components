#!/usr/bin/env bash
# spell-checker: ignore pipefail
set -euo pipefail; if [ -n "${DEBUG-}" ]; then set -x; fi

# Tags the commit that was just published, as the git tag consumers can install from.
# The tag points at a commit that adds the built dist/ to HEAD. That commit is only
# reachable from the tag, so no branch moves and the working tree is left alone.
#
# `--check` only verifies that a tag can be created, so publish.bash can find out before
# anything is published.

project_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"

cd "$project_dir"

# Creating a commit and an annotated tag needs an identity, from git config or the environment.
name="${GIT_COMMITTER_NAME:-$(git config user.name || true)}"
email="${GIT_COMMITTER_EMAIL:-$(git config user.email || true)}"
if [ -z "$name" ] || [ -z "$email" ]; then
  echo "git needs a user.name and user.email to tag the release. Set them with git config, e.g." > /dev/stderr
  echo "  git config user.name \"Your Name\" && git config user.email you@example.com" > /dev/stderr
  exit 1
fi

if [ "${1-}" = "--check" ]; then
  exit 0
fi

version=$(node -p "require('./package.json').version")

# An earlier run may have created the tag and failed to push it, so only create it when missing.
if git rev-parse -q --verify "refs/tags/$version" > /dev/null; then
  echo "tag $version already exists locally, pushing it."
else
  if [ ! -d dist ]; then
    echo "dist/ not found: run the build before tagging" > /dev/stderr
    exit 1
  fi

  index_dir=$(mktemp -d)
  trap 'rm -rf "$index_dir"' EXIT
  export GIT_INDEX_FILE="$index_dir/index"

  git read-tree HEAD
  git add -f dist
  tree=$(git write-tree)
  unset GIT_INDEX_FILE

  commit=$(git commit-tree "$tree" -p HEAD -m "Dist files")
  git tag -a "$version" -m "$version" "$commit"
fi

git push origin "refs/tags/$version"
