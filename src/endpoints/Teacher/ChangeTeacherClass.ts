import { Request, Response } from "express";
import { updateTeacherClass } from "../../query/bd-update";

export const changeTeacherClass = async (req: Request, res: Response) => {
  let codeError: number = 400;
  try {
    const { teacher_id, class_id } = req.body;

    if (!teacher_id || !class_id) {
      throw new Error("Please insert class_id and teacher_id correctly");
    }
    console.log(teacher_id, class_id);
    await updateTeacherClass(teacher_id, class_id);

    res.status(200).send("Your Class has been updated!");
  } catch (error: any) {
    res.status(codeError).send({ message: error.message });
  }
};
