import { Request, Response } from "express";

interface ISetor{
    nomeSetor: string;
}

export const create = (req: Request<{}, {}, ISetor>, res: Response) => {

    console.log(req.body  )

    return res.send('Setor criado!!');
};