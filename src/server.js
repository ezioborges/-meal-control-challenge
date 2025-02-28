import express from 'express'

const app = express()
const port = 3333

app.get('/', (req, res) => {
    console.log('Hello World!');
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}!!`)
})
