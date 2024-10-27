import { Router } from "express";
import { StatusCodes } from 'http-status-codes'

import {SetoresControllers, VisitantesControllers } from './../controllers'



const router = Router();

router.get('/', (_, res) => {
    return res.send('Conectado!!');
});

router.post('/setores',SetoresControllers.create);
router.get('/setores', (req, res) => {
    return res.send('Home setores!')
});



router.post('/visitantes', VisitantesControllers.create);
router.get('/visitantes', (req, res) => {
    return res.send('Home Vistas!')
});


export { router };