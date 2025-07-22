#!/bin/bash

set -e

echo "🔍 Checking for staged files..."

changed_files=$(git diff --cached --name-only)

test_files=""
source_files=""

for file in $changed_files; do
  if [[ $file == *.test.ts || $file == *.spec.ts ]]; then
    test_files="$test_files $file"
  elif [[ $file == src/*.ts ]]; then
    candidate="${file%.ts}.test.ts"
    if [[ -f "$candidate" ]]; then
      test_files="$test_files $candidate"
      source_files="$source_files,$file"
    fi
  fi
done

# Trim leading comma
source_files=${source_files#,}

if [[ -z "$test_files" ]]; then
  echo "✅ No related test files found for staged changes. Nothing to test."
  exit 0
fi

echo "🧪 Running Vitest with coverage for:"
echo "$test_files"
echo "📂 Only checking coverage for:"
echo "$source_files"

VITE_COVERAGE_INCLUDE="$source_files" npx vitest run $test_files --coverage
