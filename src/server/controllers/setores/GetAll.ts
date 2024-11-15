import { Request, Response } from "express";
import * as yup from 'yup';

import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

/* interface ISetor{
    nome_setor: string;
    sigla: string;
}; */

interface IQueryProps{
    page?: number,
    limit?: number,
    filter?: string;    
};

export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        filter: yup.string().optional(),
    })),
}))

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    res.setHeader('acess-control-expose-headers', 'x-total-count')
    res.setHeader('x-total-count', 1)
    
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        id: 1,
        nome_setor: 'Casa Civil',
        sigla: 'CC'
    });
};