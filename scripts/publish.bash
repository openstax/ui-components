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

package=$(node -e "process.stdout.write(JSON.parse(require('fs').readFileSync('/dev/stdin').toString()).name)" < package.json)
version=$(node -e "process.stdout.write(JSON.parse(require('fs').readFileSync('/dev/stdin').toString()).version)" < package.json)
tag_name="$package-$version"

if [ $(git tag -l "$tag_name") ]; then
  echo "package version $package@$version already exists, skipping."
else
  echo "building $package@$version ..."
  yarn dist
  git add -f dist/
  git commit -m "adding dist files"

  git tag "$package_tag_name";
  git push origin tag "$tag_name"
fi

git checkout "$current_branch"
