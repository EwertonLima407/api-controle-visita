import { Router } from "express";

import { StatusCodes } from 'http-status-codes'

import {SetoresController, VisitantesController } from './../controllers'



const router = Router();

router.get('/', (_, res) => {
    return res.send('Conectado!!');
});

router.get('/setores',SetoresController.getAllValidation, SetoresController.getAll);
router.post('/setores',SetoresController.createValidation, SetoresController.create);
router.get('/setores/:id',SetoresController.getByIdValidation , SetoresController.getById);
router.put('/setores/:id',SetoresController.updateByIdValidation , SetoresController.updateById);
router.delete('/setores/:id',SetoresController.deleteByIdValidation , SetoresController.deleteById);





router.post('/visitantes', VisitantesController.create);
 

export { router };