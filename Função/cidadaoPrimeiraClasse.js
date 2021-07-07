// Função em JS é First-Class Object (Ctizens)
// Higher-order function

// Criar de forma literal
function fun1(){  }

// Armazenar uma função em uma variável
const fun2 = function() {  } //função anônima

// Armazenar uma função em um array
const array = [function(a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar uma função em um atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa'}
console.log(obj.falar())

// Passar uma função como parâmetro
function run(fun) {
    fun()
}

run(function() { console.log('Executando...') })

// Uma função pode retornar/conter uma outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(5)
const cincoMais = soma(2,3)
cincoMais(5)
