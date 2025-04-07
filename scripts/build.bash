#!/usr/bin/env bash
# spell-checker: ignore pipefail
set -euo pipefail; if [ -n "${DEBUG-}" ]; then set -x; fi

project_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"

cd "$project_dir"

microbundle
  
if [[ "$(uname)" == "Darwin" ]]; then
  sed -i '' 's/jsx-runtime/jsx-runtime.js/g' ./dist/index.modern.mjs
else
  sed -i 's/jsx-runtime/jsx-runtime.js/g' ./dist/index.modern.mjs
fi
