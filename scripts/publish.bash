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

if git rev-parse -q --verify "refs/tags/$version" > /dev/null; then
  echo "tag $version already exists locally, aborting." > /dev/stderr
  echo "If a previous release did not push it, push it with: git push origin refs/tags/$version" > /dev/stderr
  echo "Otherwise delete it with: git tag -d $version" > /dev/stderr
  exit 1
fi

# ls-remote exits 2 when nothing matches, so any other failure is not a missing tag
tag_check=0
git ls-remote --exit-code --tags origin "refs/tags/$version" > /dev/null || tag_check=$?
if [ "$tag_check" -eq 0 ]; then
  echo "tag $version already exists on origin, aborting." > /dev/stderr
  echo "To release, bump the version in package.json and try again." > /dev/stderr
  exit 1
elif [ "$tag_check" -ne 2 ]; then
  echo "could not check origin for tag $version, aborting." > /dev/stderr
  exit 1
fi

# Fail before publishing if the tag could not be created afterwards.
./scripts/tag-release.bash --check

npm ci
npm run build:clean

# The build regenerates tracked files (src/theme/theme.css). The tag is made from HEAD, so a
# change here would be published in the package but missing from the tag.
if [ -n "$(git status --porcelain=v1)" ]; then
  echo "the build changed tracked files, so the package would not match the tag:" > /dev/stderr
  git status --short > /dev/stderr
  echo "Commit the regenerated files, then run the release again." > /dev/stderr
  exit 1
fi

npm publish

if ! ./scripts/tag-release.bash; then
  cat > /dev/stderr <<EOF

$version was published, but tagging it failed. Do not run the release again.
Once the cause is fixed, run this from the same checkout to create and push the tag:

  ./scripts/tag-release.bash

If the tag was created and only the push failed, this pushes it by hand:

  git push origin refs/tags/$version
EOF
  exit 1
fi
