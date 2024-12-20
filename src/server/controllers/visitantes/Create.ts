import { Request, Response } from "express";
import * as yup from 'yup';

import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

interface IVisitante{
    nome: string;
    documento: string;
    fone: number;
}
interface IFilter{
    filter?: string;
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IVisitante>(yup.object().shape({
        nome: yup.string().required().min(3),
        documento: yup.string().required().min(5).max(11),
        fone: yup.number().integer().required().min(10),
    })),
    query: getSchema<IFilter>(yup.object().shape({
        filter: yup.string().optional().min(3),
    })),
}))
export const create = (req: Request, res: Response) => {
    console.log(req.body)
    
    return res.status(StatusCodes.CREATED).json(1);
}