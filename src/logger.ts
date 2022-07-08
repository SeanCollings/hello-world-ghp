import { ExtraClass } from '@/extra/extra.here';

export const logger = (version?: string) =>
  console.log(
    `Hello, World!${
      version ? ` at version: ${version}` : ''
    } plus ${ExtraClass.extra()}`
  );
