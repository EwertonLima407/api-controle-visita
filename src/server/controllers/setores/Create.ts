import { Request, Response } from "express";
import * as yup from 'yup';

import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

interface ISetor{
    nome_setor: string;
    sigla: string;
};

interface IFilter{
    filter?: string;    
};

export const createValidation = validation((getSchema) => ({
    body: getSchema<ISetor>(yup.object().shape({
        nome_setor: yup.string().required().min(3),
        sigla: yup.string().required().min(2),
    })),
    query: getSchema<IFilter>(yup.object().shape({
        filter: yup.string().optional().min(3),
    })),
}))

export const create = async (req: Request<{}, {}, ISetor>, res: Response) => {
    const result = await console.log(req.body)
    
   /*  if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })s
    } */
    return res.status(StatusCodes.CREATED).json({});
};