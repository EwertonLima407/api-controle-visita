import { StatusCodes } from 'http-status-codes';
import { testSever } from '../jest.setup';



describe('Setores - Create', () => {
    
    it('buscar todos os setores registrados', async () => {
        
        const resp1 = await testSever.post('/setores').send({
            nome_setor: 'Casa Civil',
            sigla: 'CC',
            id: 1
        })

        expect(resp1.statusCode).toEqual(StatusCodes.CREATED)
        //expect(typeof resp1.body).toEqual('number')

        const resBuscada = await testSever.get('/setores').send()

        expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
        expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
        expect(resBuscada.body.length).toBeGreaterThan(0);
    })
    /* it('Tentar consultar', async () => {
        
        const resp1 = await testSever.post('/setores').send({
            nome_setor: 'Ca',
            sigla: 'Cc'
        })

        expect(resp1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(resp1.body).toHaveProperty('errors.body.nome_setor')
    })
    it('Tentar criar registro com sigla muito curta', async () => { 

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