import { User } from "./user";

// CLASSE ESTUDANTE EXTENDO OS METODOS DA CLASSE USER
export class Student extends User {
  constructor(
    id: string,
    name: string,
    email: string,
    birthDate: string,
    classId: string,
    private hobbies: string[]
  ) {
    super(id, name, email, birthDate, classId);
    this.hobbies = hobbies;
  }
  //GETTERS

  public getHobbies(): string[] {
    return this.hobbies;
  }
}
