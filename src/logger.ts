export const logger = (version?: string) =>
  console.log(`Hello, World!${version ? ` at version: ${version}` : ''}`);
