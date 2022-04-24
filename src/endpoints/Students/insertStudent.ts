import { Request, Response } from "express";
import { Student } from "../../classes/student";
import { createNewHobbie, createNewStudent } from "../../query/bd-insert";
import { gerarId } from "../../utils/gerarId";

export const InsertStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  let codeError: number = 400;
  try {
    const id = new gerarId().execute();
    const { name, email, birthDate, classId, hobbies } = req.body;

    if (!name || !email || !birthDate || !classId || !hobbies) {
      throw new Error("Missing body data!");
    }

    const validateDate = (date: string): boolean => {
      const re = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
      return re.test(date);
    };
    const date = validateDate(birthDate);

    if (date === false) {
      throw new Error("Invalid date format, please try dd/mm/yyyy");
    }

    const dataNasc = birthDate.split("/");
    const birthDateFormatted = `${dataNasc[2]}-${dataNasc[1]}-${dataNasc[0]}`;

    const student = new Student(
      id,
      name,
      email,
      birthDateFormatted,
      classId,
      hobbies
    );

    console.log(student);
    await createNewStudent(student);

    for (let i = 0; i <= hobbies.length - 1; i++) {
      await createNewHobbie(student, hobbies[i]);
    }

    res.status(400).send(`Student  ${req.body.name} successfully created`);
  } catch (error: any) {
    res.status(codeError).send({ message: error.message });
  }
};
