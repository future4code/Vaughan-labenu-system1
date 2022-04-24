import { Request, Response } from "express";
import { selectActiveClass } from "../../query/bd-select";
 
export const getActiveClass = async (req: Request, res: Response): Promise<any> => {
    let codeError: number = 400;
    try {
        const allClass = await selectActiveClass()

        res.status(200).send({ allClass })

    } catch (error: any) {
        res.status(codeError).send({ message: error.message });
    }
}
