import { Request, Response } from "express";
import { selectStudentByName } from "../../query/bd-select";
 
export const getStudentByname = async (req: Request, res: Response): Promise<any> => {
    let codeError: number = 400;
    try {
        const { name } = req.body
        const allStudent = await selectStudentByName(name)

        res.status(200).send({ allStudent })

    } catch (error: any) {
        res.status(codeError).send({ message: error.message });
    }
}
