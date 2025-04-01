import fs from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

async function main() {
  const cwd = fileURLToPath(new URL('..', import.meta.url));

  const files = await fs.readdir(resolve(cwd, 'dist'), { recursive: true });
  const filteredFiles = files.filter((path) => path.endsWith('.d.ts') && path !== 'index.d.ts');

  await Promise.all(
    filteredFiles.map((path) => fs.unlink(resolve(cwd, 'dist', path))),
  );
}

await main();
