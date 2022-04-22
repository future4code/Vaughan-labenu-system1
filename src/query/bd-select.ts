import connection from "../data/connection";

export const selectClass = async (id: string) => {
  const result = await connection("class").select("id").where({ id: id });

  return result;
};

export const selectIdBySpecialty = async (name: string): Promise<any> => {
  const result = await connection("specialty")
    .select("id")
    .where({ name: name });
  return result;
};

export const selectTeacherById = async (id: string, email: string) => {
  const result = await connection("teacher")
    .select("id")
    .where({ id: id })
    .orWhere("teacher.email", email);
  return result;
};
