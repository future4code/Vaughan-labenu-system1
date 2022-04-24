import { Request, Response } from "express";
import { updateStudentClass } from "../../query/bd-update";

export const changeStudentClass = async (req: Request, res: Response) => {
    let codeError: number = 400;
    try {
        const { student_id, class_id } = req.body

        if (!student_id || !class_id) {
            throw new Error("Please insert class_id and student_id correctly")
        }
        console.log(student_id, class_id);
        await updateStudentClass(student_id, class_id)

        res.status(200).send("Your Class has been updated!")
    } catch (error:any) {
        res.status(codeError).send({ message: error.message });
    }
}