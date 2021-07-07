const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancodedados = require('./bancodedados')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancodedados.getProdutos())
})

app.get('/produtos/:in/:nome', (req, res, next) => {
    res.send(bancodedados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancodedados.salvarProduto({
          nome: req.body.nome,
          preco: req.body.preco
    })
    req.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})