#!/bin/bash

set -e

echo "🔍 Checking for modified test files..."

changed_files=$(git diff --name-only origin/main...HEAD)

test_files=""
for file in $changed_files; do
  if [[ $file == *.test.ts || $file == *.spec.ts ]]; then
    test_files="$test_files $file"
  fi
done

if [[ -z "$test_files" ]]; then
  echo "✅ No test files modified. Nothing to test."
  exit 0
fi

echo "🧪 Running Vitest with coverage for:"
echo "$test_files"

npx vitest run $test_files --coverage
