import { Request, Response } from "express"
import {Class} from '../../classes/class';
import {createNewClass} from '../../query/bd-insert';
import {gerarId} from '../../utils/gerarId'



export const insertClass = async (req: Request, res: Response): Promise<void> => {
    let codeError: number = 400
    try {
        const body: any = {
            id:new gerarId().execute(),
            name: req.body.name,
            teacher: req.body.teacher,
            student: req.body.student,
            module: req.body.module
        }

        let options = [1,2,3,4,5,6];
        
            if(!body.name || typeof body.name !== "string") {
                codeError = 422;
                throw new Error("Name is missing or wrong name were sent");
            }
           
            if(options.includes(body.moodule)){
                console.log("não passou");
                codeError = 422;
                throw new Error("Only values between 1 and 6 are allowed")
            }

        let newClass = new Class(body.id,body.name,body.module)    
        await createNewClass(newClass);

        res.status(201).send({ message: `Class ${req.body.name} was created sucessfully` });
    } catch (error: any) {
        res.status(codeError).send({ message: error.message});
    }
}