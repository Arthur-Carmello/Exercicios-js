console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

//FUNCAO SEM RETORNO
function imprimirSoma(a, b){ //fracamente tipada
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //---NaN
imprimirSoma(2, 4, 5, 6, 7, 8) //soma a e b, o resto ignora
imprimirSoma() //---NaN

//FUNCAO COM RETORNO
function soma(a, b = 1){
    return a + b
}

soma(2, 3)
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())


