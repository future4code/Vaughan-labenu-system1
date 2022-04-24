import connection from "../data/connection";


export const updateClassModule = async (id: string, module: number, ): Promise<any> => {
    const result = await connection.raw(`
        UPDATE class set module=${module} WHERE id="${id}";
    `)
    return result;
}