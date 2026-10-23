#!/usr/bin/env bash
# spell-checker: ignore pipefail
set -euo pipefail; if [ -n "${DEBUG-}" ]; then set -x; fi

project_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"

cd "$project_dir"

if [ -n "$(git status --porcelain=v1)" ]; then
  echo "please stash, commit, gitignore, or reset your changes before publishing" > /dev/stderr
  exit 1
fi

version=$(node -p "require('./package.json').version")

# ls-remote exits 2 when nothing matches, so any other failure is not a missing tag
tag_check=0
git ls-remote --exit-code --tags origin "refs/tags/$version" > /dev/null || tag_check=$?
if [ "$tag_check" -eq 0 ]; then
  echo "tag $version already exists, aborting." > /dev/stderr
  echo "To release, bump the version in package.json and try again." > /dev/stderr
  exit 1
elif [ "$tag_check" -ne 2 ]; then
  echo "could not check origin for tag $version, aborting." > /dev/stderr
  exit 1
fi

npm ci
npm run build:clean
npm publish
./scripts/tag-release.bash
