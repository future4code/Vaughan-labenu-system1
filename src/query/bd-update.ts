import connection from "../data/connection";


export const updateClassModule = async (id: string, module: number, ): Promise<any> => {
    const result = await connection.raw(`
        UPDATE class set module=${module} WHERE id="${id}";
    `)
    return result;
}


export const updateStudentClass = async (student_id: string, class_id: string): Promise<any> => {
    const result = await connection.raw(`
        UPDATE student set class_id="${class_id}" WHERE id="${student_id}";
    `)
    return result
}