import { Request, Response } from "express";
import * as yup from 'yup';

import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

interface IDestino{
    recebedor: string;
    obs: string;
}

interface IFilter{
    filter?: string;
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IDestino>(yup.object().shape({
        recebedor: yup.string().required().min(3),
        obs: yup.string().required().min(5).max(150),
    })),
    query: getSchema<IFilter>(yup.object().shape({
        filter: yup.string().optional().min(3),
    })),
}))
export const create = (req: Request, res: Response) => {
    console.log(req.body)
    
    return res.status(StatusCodes.CREATED).json(1);
}