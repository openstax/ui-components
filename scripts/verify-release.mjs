// Checks that the package npm is about to publish is exactly what the release tag holds.
// The tag is the release commit plus the built dist/, so every file in the package has to be
// in the tag's tree with the same contents. This catches untracked or ignored files under
// src/, a generated file that changed during the build, and anything else that would make
// them differ.
import { execFileSync } from "node:child_process";

const tag = process.argv[2];
if (!tag) {
  console.error("usage: verify-release.mjs <tag>");
  process.exit(2);
}

const run = (command, args) => execFileSync(command, args, { encoding: "utf8", maxBuffer: 1 << 28 });

// "<mode> <type> <blob>\t<path>", NUL separated
const inTag = new Map(
  run("git", ["ls-tree", "-r", "-z", "--full-tree", `${tag}^{tree}`])
    .split("\0")
    .filter(Boolean)
    .map((entry) => {
      const [meta, file] = entry.split("\t");
      return [file, meta.split(" ")[2]];
    }),
);

const [{ files }] = JSON.parse(run("npm", ["pack", "--dry-run", "--json"]));

const problems = [];
for (const { path: file } of files) {
  const blob = inTag.get(file);
  if (blob === undefined) {
    problems.push(`${file}: in the package, but not in the tag (untracked or ignored)`);
  } else if (run("git", ["hash-object", file]).trim() !== blob) {
    problems.push(`${file}: differs from the committed copy`);
  }
}

if (problems.length > 0) {
  console.error("the package would not match the tag:");
  for (const problem of problems) console.error(`  ${problem}`);
  console.error("Commit or remove these, then run the release again.");
  process.exit(1);
}
