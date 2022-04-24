import { Request, Response } from "express";
import { updateClassModule } from "../../query/bd-update";

export const changeClassModule = async (req: Request, res: Response) => {
  let codeError: number = 400;
  try {
    const { id, module } = req.body;

    if (!id || !module) {
      throw new Error("Please insert module and id correctly");
    }
    console.log(id, module);
    await updateClassModule(id, module);

    res.status(200).send("Your module has been updated!");
  } catch (error: any) {
    res.status(codeError).send({ message: error.message });
  }
};
