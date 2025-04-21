#!/usr/bin/env bash
# spell-checker: ignore pipefail
set -euo pipefail; if [ -n "${DEBUG-}" ]; then set -x; fi

project_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"

cd "$project_dir"

yarn --check-files

if [ -n "$(git status --porcelain=v1 2>/dev/null)" ]; then
  echo "please stash, commit, gitignore, or reset your changes before publishing" > /dev/stderr
  exit 1
fi

current_branch=$(git rev-parse --abbrev-ref HEAD)
date_key=$(date +%Y-%m-%d_%H-%M-%S)
release_branch_name="release-$date_key"

git checkout -b "$release_branch_name"

package=$(node -e "require('./package.json').name)")
version=$(node -e "require('./package.json').version)")
tag_name="$version"

if [ $(git tag -l "$tag_name") ]; then
  echo "package version $package@$version already exists, skipping."
else
  echo "building $package@$version ..."
  yarn build:clean
  git add -f dist/
  git commit -m "adding dist files"

  git tag "$tag_name";
  git push origin tag "$tag_name"
fi

git checkout "$current_branch"
