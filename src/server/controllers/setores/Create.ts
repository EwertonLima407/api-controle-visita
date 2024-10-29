import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

interface ISetor{
    nome_setor: string;
    sigla: string;
}

const bodyValidation: yup.Schema<ISetor> = yup.object().shape({
    nome_setor: yup.string().required().min(3),
    sigla: yup.string().required().min(2)
});

export const create = async (req: Request<{}, {}, ISetor>, res: Response) => {
    
    let validatedData: ISetor | undefined = undefined;

    try {
        validatedData = await bodyValidation.validate(req.body, {abortEarly: false})
    } catch (error) {
        const yupError = error as yup.ValidationError;
        const errors: Record<string, string> = {}; 

        yupError.inner.forEach(error => {
            if (error.path === undefined)  return
            errors[error.path] = error.message;
        })
        
        return res.status(StatusCodes.BAD_REQUEST).json({ errors })
    }

    console.log(validatedData)
    
    return res.send('Setor criado!!');
};