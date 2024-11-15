import { StatusCodes } from 'http-status-codes';
import { testSever } from '../jest.setup';



describe('Setores - Create', () => {
    
    it('Atualiza setores', async () => {
        
        const resp1 = await testSever.post('/setores').send({
            nome_setor: 'Casa Civil',
            sigla: 'CC'
        })

        expect(resp1.statusCode).toEqual(StatusCodes.CREATED)
        expect(typeof resp1.body).toEqual('number')
    })
    it('Tentar atualizar setor que não existe', async () => {
        
        const resp1 = await testSever.put('/setores/9999999').send({
            nome_setor: 'Casa',
        })

        expect(resp1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
        expect(resp1.body).toHaveProperty('errors.default')
    })
    /* it('Tentar criar registro com sigla muito curta', async () => { 

        const resp1 = await testSever.post('/setores').send({
            nome_setor: 'Casa Civil',
            sigla: 'C'
        })

        expect(resp1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(resp1.body).toHaveProperty('errors.body.sigla')
    }) */
    //it('Tentar criar registro com nome de setor com numero', async () => { })
    //it('Tentar criar registro muito curto', async () => { })
})