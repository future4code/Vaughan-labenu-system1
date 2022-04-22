import { User } from "./user";

export class Teacher extends User {
  constructor(
    id: string,
    name: string,
    email: string,
    birthDate: string,
    classId: string,
    private specialties: string[]
  ) {
    super(id, name, email, birthDate, classId);
    this.specialties = specialties;
  }

  public getSpecialties(): string[] {
    return this.specialties;
  }
}
