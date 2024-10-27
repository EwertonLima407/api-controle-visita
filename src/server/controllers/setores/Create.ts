import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

interface ISetor{
    nome_setor: string;
}

const bodyValidation: yup.Schema<ISetor> = yup.object().shape({
    nome_setor: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, ISetor>, res: Response) => {
    
    let validatedData: ISetor | undefined = undefined;

    try {
        validatedData = await bodyValidation.validate(req.body)
    } catch (error) {
        const yupError = error as yup.ValidationError;
        
        return res.json({
            error: {
                default:yupError.message,
            }
        })
    }

    console.log(req.body)
    
    return res.send('Setor criado!!');
};