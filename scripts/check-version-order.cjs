#!/usr/bin/env node
// Fails unless a version is higher than every full release tag (MAJOR.MINOR.PATCH, no "v" prefix).
// Pre-release tags and tags in any other form are ignored, so an earlier pre-release of a later
// version does not block a patch release.
//
// usage: check-version-order.cjs <version>   (tag names on stdin, one per line)

const RELEASE_TAG = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[A-Za-z-][0-9A-Za-z-]*)(?:\.(?:0|[1-9]\d*|\d*[A-Za-z-][0-9A-Za-z-]*))*))?$/;

const parse = (version) => {
  const match = RELEASE_TAG.exec(version);
  return match && {core: match.slice(1, 4).map(Number), pre: match[4] ? match[4].split('.') : []};
};

const compareIdentifiers = (a, b) => {
  const aNum = /^\d+$/.test(a);
  const bNum = /^\d+$/.test(b);
  if (aNum && bNum) return Math.sign(Number(a) - Number(b));
  if (aNum !== bNum) return aNum ? -1 : 1;
  return a < b ? -1 : a > b ? 1 : 0;
};

/** Semver precedence: negative if a is lower than b, positive if higher, 0 if equal. */
const compareVersions = (a, b) => {
  const left = parse(a);
  const right = parse(b);
  for (let i = 0; i < 3; i++) {
    if (left.core[i] !== right.core[i]) return Math.sign(left.core[i] - right.core[i]);
  }
  if (!left.pre.length || !right.pre.length) return Math.sign(right.pre.length - left.pre.length);
  for (let i = 0; i < Math.max(left.pre.length, right.pre.length); i++) {
    if (left.pre[i] === undefined) return -1;
    if (right.pre[i] === undefined) return 1;
    const result = compareIdentifiers(left.pre[i], right.pre[i]);
    if (result) return result;
  }
  return 0;
};

/** The highest full release tag in the list, or undefined when there is none. */
const highestReleaseTag = (tags) => tags
  .filter((tag) => parse(tag) && !parse(tag).pre.length)
  .reduce((highest, tag) => highest === undefined || compareVersions(tag, highest) > 0 ? tag : highest, undefined);

module.exports = {compareVersions, highestReleaseTag};

if (require.main === module) {
  const version = process.argv[2];
  const tags = require('fs').readFileSync(0, 'utf8').split('\n').map((line) => line.trim()).filter(Boolean);
  const highest = highestReleaseTag(tags);
  if (highest !== undefined && compareVersions(version, highest) <= 0) {
    console.error(`version ${version} is not higher than the release tag ${highest}.`);
    process.exit(1);
  }
}
