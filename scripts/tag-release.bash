#!/usr/bin/env bash
# spell-checker: ignore pipefail
set -euo pipefail; if [ -n "${DEBUG-}" ]; then set -x; fi

# Tags the commit that was just published, as the git tag consumers can install from.
# The tag points at a commit that adds the built dist/ to HEAD. That commit is only
# reachable from the tag, so no branch moves and the working tree is left alone.

project_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"

cd "$project_dir"

version=$(node -p "require('./package.json').version")

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
git push origin "refs/tags/$version"
