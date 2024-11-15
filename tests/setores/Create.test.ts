import { StatusCodes } from 'http-status-codes';
import { testSever } from './../jest.setup';



describe('Setores - Create', () => {
    
    it('Criar registro', async () => {
        
        const resp1 = await testSever.post('/setores').send({
            nome_setor: 'Casa Civil',
            sigla: 'CC'
        })

        expect(resp1.statusCode).toEqual(StatusCodes.CREATED)
        expect(typeof resp1.body).toEqual('number')
    })
    it('Tentar criar registro com nome de setor muito curto', async () => {
        
        const resp1 = await testSever.post('/setores').send({
            nome_setor: 'Ca',
            sigla: 'CC'
        })

        expect(resp1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(resp1.body).toHaveProperty('errors.body.nome_setor')
        expect(resp1.body).toHaveProperty('errors.body.sigla')
    })
    it('Tentar criar registro com sigla muito curta', async () => { 

        const resp1 = await testSever.post('/setores').send({
            nome_setor: 'Casa Civil',
            sigla: 'C'
        })

        expect(resp1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(resp1.body).toHaveProperty('errors.body.nome_setor')
        expect(resp1.body).toHaveProperty('errors.body.sigla')
    })
    //it('Tentar criar registro com nome de setor com numero', async () => { })
    //it('Tentar criar registro muito curto', async () => { })
})