let valor //não inicializada
console.log(valor)
//console.log(valor2) //não foi declarada

valor = null //ausência de valor - zerar
console.log(valor)
//console.log(valor.toString())

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar
console.log(!!produto.preco)
console.log(produto)
//delete produto.preco

produto.preco = null
console.log(!!produto.preco)
console.log(produto)