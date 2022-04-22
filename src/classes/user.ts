export abstract class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private birthDate: string,
    private classId: string
  ) {}

  //GETTERS

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getBirthDate(): string {
    return this.birthDate;
  }

  public getClassId(): string {
    return this.classId;
  }
  //SETTERS

  public setName(name: string): void {
    this.name = name;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public setBirthDate(birthDate: string): void {
    this.birthDate = birthDate;
  }
}
