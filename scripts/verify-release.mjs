// Checks that the package npm is about to publish is exactly what the release tag will hold.
// The tag is HEAD plus the built dist/, so every file in the package has to be in that tree
// with the same contents. This catches untracked or ignored files under src/, a generated
// file that changed during the build, and anything else that would make them differ.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const run = (command, args, env = {}) =>
  execFileSync(command, args, { encoding: "utf8", env: { ...process.env, ...env }, maxBuffer: 1 << 28 });

const indexDir = fs.mkdtempSync(path.join(os.tmpdir(), "release-tree-"));
const env = { GIT_INDEX_FILE: path.join(indexDir, "index") };

let planned;
try {
  run("git", ["read-tree", "HEAD"], env);
  run("git", ["add", "-f", "dist"], env);
  // "<mode> <blob> <stage>\t<path>"
  planned = new Map(
    run("git", ["ls-files", "-s", "-z"], env)
      .split("\0")
      .filter(Boolean)
      .map((line) => {
        const [meta, file] = line.split("\t");
        return [file, meta.split(" ")[1]];
      }),
  );
} finally {
  fs.rmSync(indexDir, { recursive: true, force: true });
}

const [{ files }] = JSON.parse(run("npm", ["pack", "--dry-run", "--json"]));

const problems = [];
for (const { path: file } of files) {
  const blob = planned.get(file);
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
