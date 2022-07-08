import { ExtraClass } from '@/extra/extra.here';

export const logger = (version?: string) =>
  console.log(
    `Hello, World!${
      version ? ` at version: ${version}` : ''
    } plus ${ExtraClass.extra()}`
  );

export class Logger {
  private static getHello(version?: string) {
    return `Hello, World!${version ? ` at version: ${version}` : ''}`;
  }

  static log(version?: string) {
    console.log(this.getHello(version));
  }

  static logExtra(version?: string) {
    console.log(`${this.getHello(version)} plus ${ExtraClass.extra()}`);
  }
}
