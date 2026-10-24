#!/usr/bin/env bash
# spell-checker: ignore pipefail
set -euo pipefail; if [ -n "${DEBUG-}" ]; then set -x; fi

# Publishes the package and tags the release. Publishing cannot be undone, so everything that
# could make the tag fail afterwards is checked first, cheapest first, before `npm ci` runs.

project_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"

cd "$project_dir"

fail() {
  echo "$1" > /dev/stderr
  shift
  for line in "$@"; do echo "$line" > /dev/stderr; done
  exit 1
}

if [ -n "$(git status --porcelain=v1)" ]; then
  fail "please stash, commit, gitignore, or reset your changes before publishing"
fi

version=$(node -p "require('./package.json').version")

if git rev-parse -q --verify "refs/tags/$version" > /dev/null; then
  fail "tag $version already exists locally, aborting." \
    "If a previous release did not push it, push it with: git push origin refs/tags/$version" \
    "Otherwise delete it with: git tag -d $version"
fi

# ls-remote exits 2 when nothing matches, so any other failure is not a missing tag
tag_check=0
git ls-remote --exit-code --tags origin "refs/tags/$version" > /dev/null || tag_check=$?
if [ "$tag_check" -eq 0 ]; then
  fail "tag $version already exists on origin, aborting." \
    "To release, bump the version in package.json and try again."
elif [ "$tag_check" -ne 2 ]; then
  fail "could not check origin for tag $version, aborting."
fi

# Identity, tag signing and push access to origin.
./scripts/tag-release.bash --check

registry=$(node -p "(require('./package.json').publishConfig || {}).registry || ''")
if ! npm whoami ${registry:+--registry "$registry"} > /dev/null 2>&1; then
  fail "not logged in to the npm registry${registry:+ ($registry)}, aborting." \
    "Log in with npm login, or set the auth token for the registry in your .npmrc."
fi

head=$(git rev-parse HEAD)

npm ci
npm run build:clean

if [ "$(git rev-parse HEAD)" != "$head" ]; then
  fail "HEAD changed while building, so the tag would not match what was built. Run the release again."
fi

# The build regenerates tracked files (src/theme/theme.css), so this also catches a stale one.
if [ -n "$(git status --porcelain=v1)" ]; then
  git status --short > /dev/stderr
  fail "the build changed files, so the package would not match the tag." \
    "Commit the regenerated files, then run the release again."
fi

# Everything in the package has to be in the tag, byte for byte.
node ./scripts/verify-release.mjs

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
