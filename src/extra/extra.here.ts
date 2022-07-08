export class ExtraClass {
  private static _instance: ExtraClass = new ExtraClass();

  public static getInstance(): ExtraClass {
    return ExtraClass._instance;
  }

  public static extra() {
    return 'extra';
  }
}
