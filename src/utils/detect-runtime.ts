export function detectRuntime() {
  if (process.versions.bun) {
    return 'bun' as const;
  }

  return 'node' as const;
}
