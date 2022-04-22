import connection from "../data/connection"
import {Class} from "../classes/class"
import {Student} from "../classes/student"
import {Teacher} from "../classes/teacher"
import {gerarId} from '../utils/gerarId'



// SQL INSERT FOR NEW CLASS

export const createNewClass = async (classParam: Class): Promise<any> => {

    const result = await connection.raw(`
            INSERT INTO class (id, name, module)
            VALUES (
                '${classParam.getId()}',
                '${classParam.getName()}',
                '${classParam.getModule()}'
            )
        `)

    return result[0]

}


// SQL INSERT FOR NEW STUDENT


export const createNewStudent = async (studantParam: Student): Promise<any> => {
    const result = await connection.raw(`
        INSERT INTO student ()
        VALUES (
            '${studantParam.getId}',
            '${studantParam.getName()}',
            '${studantParam.getEmail}',
            '${studantParam.getBirthDate}',
            '${studantParam.getClassId}'
        );
    `)
    return result[0]
}


// SQL INSERT FOR STUDENT HOBBIE

export const createNewStudentHobbie = async (studantParam: Student, idHobby: string): Promise<any> => {
    const result = await connection.raw(`
    INSERT INTO student_has_hobby (id, student_id, hobby_id)
    VALUES(
    '${new gerarId().execute()}',    
    '${studantParam.getId()}',
    '${idHobby}'
     );   
    `)
    return result[0]
}


// SQL INSERT FOR NEW HOBBIE

export const createNewHobbie = async (studantParam: Student, hobby: string): Promise<any> => {
    let id = new gerarId().execute();
    await connection.raw(`
    INSERT INTO hobby (id, name)
    VALUES(
    '${id}',    
    '${hobby}'
     );   
    `)

    await createNewStudentHobbie(studantParam, id)
}


// SQL INSERT FOR NEW TEACHER

export const createNewTeacher = async (teacherParam: Teacher): Promise<any> => {
    const result = await connection.raw(`
        INSERT INTO teacher
        VALUES (
            '${teacherParam.getId()}',
            '${teacherParam.getName()}',
            '${teacherParam.getEmail()}',
            '${teacherParam.getBirthDate()}',
            '${teacherParam.getClassId()}'
        );
    `)
    return result[0]
}


// SQL INSERT TEACHER SPECIALITES

export const createNewTeacherSpecialty = async (teacherParam: Teacher, especialty: string) => {
    const result = await connection.raw(`
    INSERT INTO teacher_has_specialty
    VALUES (
        '${new gerarId().execute()}',
        '${teacherParam.getId()}',
        '${especialty}'
    );
    
    `)
    return result[0]
}

