import { StatusCodes } from 'http-status-codes';
import { testSever } from '../jest.setup';



describe('Setores - Create', () => {
    
    it('Buscar setor por ID', async () => {
        
        const resp1 = await testSever.post('/setores').send({
            nome_setor: 'Casa Civil',
            sigla: 'CC',
            id: 1,
        })
        
        expect(resp1.statusCode).toEqual(StatusCodes.CREATED);
        
        const resBuscada = await testSever.get(`/setores/${resp1.body.id}`).send('Item apagado');
        
        expect(resBuscada.statusCode).toEqual(StatusCodes.NO_CONTENT)
    })
    it('Tentar buscar setorqu não existe', async () => {
        
        const resp1 = await testSever.get('/setores/9999999').send()

        expect(resp1.statusCode).toEqual(StatusCodes.OK)
        expect(resp1.body).toHaveProperty('nome_setor')
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