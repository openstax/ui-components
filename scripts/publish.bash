#!/usr/bin/env bash
# spell-checker: ignore pipefail
set -euo pipefail; if [ -n "${DEBUG-}" ]; then set -x; fi

# Publishes the package and tags the release, as the git tag consumers can install from.
#
# Publishing cannot be undone, so the tag is created first. Everything that can go wrong with
# it (the identity, signing, a clash, a mismatch with the package) then happens before the
# publish, with no stand-in to keep in step with the real thing. The only step left after the
# publish is pushing the tag, which is one command to repeat.
#
# The tag points at a commit that adds the built dist/ to the release commit. That commit is
# only reachable from the tag, so no branch moves and the working tree is left alone.

project_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"

cd "$project_dir"

# The commit being released. The build, the checks and the tag all refer to this one object.
head=$(git rev-parse HEAD)

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

# Semver MAJOR.MINOR.PATCH with an optional -prerelease part, such as 1.26.4 or 1.25.1-pre1. No build metadata.
if ! [[ "$version" =~ ^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(-(0|[1-9][0-9]*|[0-9]*[A-Za-z-][0-9A-Za-z-]*)(\.(0|[1-9][0-9]*|[0-9]*[A-Za-z-][0-9A-Za-z-]*))*)?$ ]]; then
  fail "version \"$version\" in package.json is not MAJOR.MINOR.PATCH or MAJOR.MINOR.PATCH-prerelease, aborting."
fi

# A pre-release must not take the latest tag, which is what plain installs resolve to.
dist_tag=""
if [[ "$version" == *-* ]]; then dist_tag="next"; fi

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

registry=$(node -p "(require('./package.json').publishConfig || {}).registry || ''")
if ! npm whoami ${registry:+--registry "$registry"} > /dev/null 2>&1; then
  fail "not logged in to the npm registry${registry:+ ($registry)}, aborting." \
    "Log in with npm login, or set the auth token for the registry in your .npmrc."
fi

# A tag this run created is removed again if the run stops before the publish was attempted.
tag_created=""
publish_attempted=""
index_dir=""
cleanup() {
  if [ -n "$index_dir" ]; then rm -rf "$index_dir"; fi
  if [ -n "$tag_created" ] && [ -z "$publish_attempted" ]; then
    git tag -d "$version" > /dev/null 2>&1 || true
  fi
}
trap cleanup EXIT

npm ci
npm run build:clean

# The build regenerates tracked files (src/theme/theme.css), so this also catches a stale one.
if [ -n "$(git status --porcelain=v1)" ]; then
  git status --short > /dev/stderr
  fail "the build changed files, so the package would not match the tag." \
    "Commit the regenerated files, then run the release again."
fi

make_tag() {
  index_dir=$(mktemp -d)
  local tree dist_commit
  tree=$(GIT_INDEX_FILE="$index_dir/index" bash -c 'git read-tree "$1" && git add -f dist && git write-tree' _ "$head") || return 1
  dist_commit=$(git commit-tree "$tree" -p "$head" -m "Dist files") || return 1
  git tag -a "$version" -m "$version" "$dist_commit" || return 1
}

if ! make_tag; then
  fail "git could not create the release tag." \
    "It needs an author and committer identity, e.g." \
    "  git config user.name \"Your Name\" && git config user.email you@example.com" \
    "and, if tag.gpgSign is on, a usable signing key."
fi
tag_created=1

# Everything in the package has to be in the tag, byte for byte.
node ./scripts/verify-release.mjs "$version"

# A dry run contacts origin the way the real push does, so missing credentials show up now.
if ! git push --dry-run origin "refs/tags/$version" > /dev/null 2>&1; then
  fail "git cannot push the tag to origin. Check your credentials and your access to the repository."
fi

# The package is built from the working tree, so nothing may have moved the checkout since.
if [ "$(git rev-parse HEAD)" != "$head" ]; then
  fail "HEAD changed while building, so the package would not match the tag. Run the release again."
fi

publish_attempted=1
# The registry is passed explicitly so the login checked above is for the registry published to.
if ! npm publish ${registry:+--registry "$registry"} ${dist_tag:+--tag "$dist_tag"}; then
  fail "npm publish failed." \
    "If the package was not published, delete the tag it left with: git tag -d $version" \
    "If it was published, push the tag with: git push origin refs/tags/$version"
fi

if ! git push origin "refs/tags/$version"; then
  cat > /dev/stderr <<EOF

$version was published, but its tag was not pushed. Do not run the release again.
The tag exists locally, so push it by hand once the cause is fixed:

  git push origin refs/tags/$version
EOF
  exit 1
fi
