import express from 'express';

const server = express();



server.get('/', (_, res) => {
    return res.send('Conectado!!');
});


export { server };