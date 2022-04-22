import { Request, Response } from "express"
import {Teacher} from '../../classes/teacher';
import {createNewTeacher, createNewTeacherSpecialty} from '../../query/bd-insert';
import {gerarId} from '../../utils/gerarId'
import {selectClass} from '../../query/bd-select'


export const insertTeacher = async (req: Request, res: Response): Promise<void> => {
    let codeError: number = 400
    try {
        const id = new gerarId().execute();
       const{
           name,
           email,
           birthDate,
           classId,
           specialties
       } = req.body
        console.log("cheguei aqui");


        const select = await selectClass(classId);

        if(!name || !email || !birthDate || !classId || !specialties.length) {
            throw new Error("Please submit all fields correctly");
        }
        console.log("cheguei aqui1");

        if(typeof name !== "string" || typeof email !== "string" || typeof birthDate !== "string" || typeof classId !== "string"){
            throw new Error("Please change the fields to string format");
        }
        console.log("cheguei aqui2");
        if(!select.length){
            throw new Error("Please select a valid id for class");
        }
        console.log("cheguei aqui3");

        const validateDate = (date: string): boolean => {
            const re = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
            return re.test(date)
        }
        console.log("cheguei aqui4");
    

        const dataNasc =birthDate.split("/")
        const birthDateFormatted = `${dataNasc[2]}-${dataNasc[1]}-${dataNasc[0]}`

        const date = validateDate(birthDate);

        if(date === false ){
            console.log("cheguei aqui5");

            throw new Error("Invalid date format, please try dd/mm/yyyy")
        }

        //validador de e-mail pesquisar

        
        //passar para o utils 

        const teacher = new Teacher(id,name,email,birthDateFormatted,classId,specialties)

        await createNewTeacher(teacher);

        for (let i = 0; i <= specialties.length - 1; i++) {
            console.log(teacher);
            console.log(specialties[i]);
            await createNewTeacherSpecialty(teacher, specialties[i])
        }
     
        res.status(201).send({ message: `Teacher ${req.body.name} was created sucessfully` });
    } catch (error: any) {
        res.status(codeError).send({ message: error.message});
    }
}