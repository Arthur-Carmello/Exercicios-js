//par nome/valor
const saudacao = 'Opa'// contexto léxico - é o local onde a variável foi definida fisicamente no código

function exec(){
    const saudacao = 'Fala'
    return saudacao
}

//Objetos são grupos aninahdos de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
   