#!/usr/bin/env bash
# spell-checker: ignore pipefail
set -euo pipefail; if [ -n "${DEBUG-}" ]; then set -x; fi

project_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"

cd "$project_dir"

# theme.css is generated from the JS theme, so regenerate before anything copies it.
# Committed too, because jest and ladle read src/ directly and never run this script;
# src/theme/tokens.spec.ts fails when the committed file is stale.
./scripts/generate-theme-css.bash

tsc_args=(--noEmit false --declaration)

npx tsc --project tsconfig.without-specs.esm.json "${tsc_args[@]}"
rsync -av --prune-empty-dirs --include="*.css" --include="*/" --exclude="*" src/ dist/esm/

npx tsc --project tsconfig.without-specs.cjs.json "${tsc_args[@]}"
rsync -av --prune-empty-dirs --include="*.css" --include="*/" --exclude="*" src/ dist/cjs/
