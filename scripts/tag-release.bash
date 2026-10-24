#!/usr/bin/env bash
# spell-checker: ignore pipefail
set -euo pipefail; if [ -n "${DEBUG-}" ]; then set -x; fi

# Tags the commit that was just published, as the git tag consumers can install from.
# The tag points at a commit that adds the built dist/ to HEAD. That commit is only
# reachable from the tag, so no branch moves and the working tree is left alone.
#
# `--check` only verifies that the tag could be created and pushed, so publish.bash can find
# out before anything is published. `--commit <sha>` tags exactly the commit that was verified
# and published, and refuses to run if HEAD has moved since.

project_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"

cd "$project_dir"

version=$(node -p "require('./package.json').version")

mode=""
commit=$(git rev-parse HEAD)
while [ "$#" -gt 0 ]; do
  case "$1" in
    --check) mode=check ;;
    --commit) shift; commit=$(git rev-parse --verify "$1^{commit}") ;;
    *) echo "unknown argument: $1" > /dev/stderr; exit 1 ;;
  esac
  shift
done

if [ "$mode" = "check" ]; then
  # Do what the real run does with a throwaway tag, so every setting that can break it is
  # exercised: the author and committer identity, tag signing (tag.gpgSign needs a key) and
  # the credentials to push a tag to origin. The commit is never referenced.
  probe="release-check-$$"
  trap 'git tag -d "$probe" > /dev/null 2>&1 || true' EXIT

  if ! git commit-tree "$commit^{tree}" -p "$commit" -m "check" > /dev/null 2>&1 \
    || ! git tag -a "$probe" -m "check" "$commit" > /dev/null 2>&1; then
    echo "git cannot create the release tag. It needs an author and committer identity, e.g." > /dev/stderr
    echo "  git config user.name \"Your Name\" && git config user.email you@example.com" > /dev/stderr
    echo "and, if tag.gpgSign is on, a usable signing key." > /dev/stderr
    exit 1
  fi

  if ! git push --dry-run origin "refs/tags/$probe" > /dev/null 2>&1; then
    echo "git cannot push a tag to origin. Check your credentials and your access to the repository." > /dev/stderr
    exit 1
  fi

  exit 0
fi

# An earlier run may have created the tag and failed to push it. Pushing an existing tag needs
# no identity, so that recovery works anywhere.
if git rev-parse -q --verify "refs/tags/$version" > /dev/null; then
  echo "tag $version already exists locally, pushing it."
else
  if [ "$(git rev-parse HEAD)" != "$commit" ]; then
    echo "HEAD is not $commit, so dist/ may not be the build of that commit. Check it out first:" > /dev/stderr
    echo "  git checkout $commit" > /dev/stderr
    exit 1
  fi

  if [ ! -d dist ]; then
    echo "dist/ not found: run the build before tagging" > /dev/stderr
    exit 1
  fi

  index_dir=$(mktemp -d)
  trap 'rm -rf "$index_dir"' EXIT
  export GIT_INDEX_FILE="$index_dir/index"

  git read-tree "$commit"
  git add -f dist
  tree=$(git write-tree)
  unset GIT_INDEX_FILE

  dist_commit=$(git commit-tree "$tree" -p "$commit" -m "Dist files")
  git tag -a "$version" -m "$version" "$dist_commit"
fi

git push origin "refs/tags/$version"
