import { StatusCodes } from 'http-status-codes';
import { testSever } from '../jest.setup';



describe('Setores - DeleteById', () => {
    
    
    it('Apaga setor', async () => { 
        
        const resp1 = await testSever.post('/setores').send({
            nome_setor: 'Casa Civil',
            sigla: 'CC',
            //id: 1,
        })
        
        expect(resp1.statusCode).toEqual(StatusCodes.CREATED);
        
        const resApagada = await testSever.delete(`/setores/${resp1.body}`).send('Item apagado');
        
        expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT)
    })
    /* it('Tentar apagar setor sem usar token de autenticação', async () => {
        
        const resp1 = await testSever.delete('/setores/1').send()
        
        expect(resp1.statusCode).toEqual(StatusCodes.UNAUTHORIZED)
        expect(resp1.body).toHaveProperty('errors.default')
    })
    it('Tentar apagar setor que não existe', async () => {
        
        const resp1 = await testSever.delete('/setores/9999999').set({}).send()
        
        expect(resp1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
        expect(resp1.body).toHaveProperty('errors.default')
    }) */
    
    //it('Tentar apagar setor sem usar token de autenticação', async () => { })
    //it('Tentar criar registro muito curto', async () => { })
})