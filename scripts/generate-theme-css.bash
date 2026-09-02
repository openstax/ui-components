#!/usr/bin/env bash
# spell-checker: ignore pipefail outdir
#
# Regenerates src/theme/theme.css from the JavaScript theme. The committed file is checked
# against this output by src/theme/tokens.spec.ts, so CI fails if palette.ts or theme.ts
# changes without this being re-run.
set -euo pipefail; if [ -n "${DEBUG-}" ]; then set -x; fi

project_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"
cd "$project_dir"

# The theme is TypeScript and the repo has no TS runner outside jest, so compile the
# renderer and its (small, pure) import graph to a throwaway directory and run that.
outdir="$(mktemp -d)"
trap 'rm -rf "$outdir"' EXIT

npx tsc src/theme/themeCss.ts \
  --outDir "$outdir" --rootDir . \
  --module commonjs --target es2019 --moduleResolution node --esModuleInterop --skipLibCheck

node -e "
  const fs = require('fs');
  const { renderThemeCss } = require('$outdir/src/theme/themeCss');
  fs.writeFileSync('src/theme/theme.css', renderThemeCss());
  console.log('wrote src/theme/theme.css');
"
