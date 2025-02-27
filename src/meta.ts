import { createRequire } from 'node:module';

export const {
  name,
  version,
} = createRequire(import.meta.url)('../package.json') as {
  readonly name: string;
  readonly version: string;
};
