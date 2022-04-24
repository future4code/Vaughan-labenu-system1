import { Request, Response } from "express";
import { selectAllTeachers } from "../../query/bd-select";

export const getTeachers = async (
  req: Request,
  res: Response
): Promise<any> => {
  let codeError: number = 400;
  try {
    const allTeachers = await selectAllTeachers();

    res.status(200).send({ allTeachers });
  } catch (error: any) {
    res.status(codeError).send({ message: error.message });
  }
};
