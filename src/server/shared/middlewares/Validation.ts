import { RequestHandler } from "express"
import { StatusCodes } from "http-status-codes";
import { ObjectSchema, Schema, ValidationError } from "yup";

type TProperty = 'body' | 'header' | 'params' | 'query';

type TGetSchema = <T extends object>(schema: ObjectSchema<T>) => ObjectSchema<T>;

type TAllSchemas = Record<TProperty, Schema<any>>;

type TGetAllSchema = (getSchema: TGetSchema) => Partial<TAllSchemas>

type TValidation = (getAllSchemas: TGetAllSchema) => RequestHandler;

export const validation: TValidation = (getAllSchemas) => async (req, res, next) => {

    const schemas = getAllSchemas((schema) => schema);
    
    const errorsResult: Record<string, Record<string, string>> = { };
  
    Object.entries(schemas).forEach(([key, schema]) => {
        try {
            schema.validateSync(req[key as TProperty], { abortEarly: false });
            //return next();
        } catch (error) {
            const yupError = error as ValidationError;
            const errors: Record<string, string> = {};
            
            yupError.inner.forEach(error => {
                if (error.path === undefined) return
                errors[error.path] = error.message;
            });
            
            errorsResult[key] = errors;
        }
    });

    if (Object.entries(errorsResult).length === 0) {
        return next();
    } else {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult })
    };

};