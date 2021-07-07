let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa) {  //Passar uma função para cumprir a promessa.
    cumprirPromessa(3)  //Gera um só valor, é a promessa de algo que vai ser executado no futuro e devolvido no futuro.
})                      //Associado a uma promessa poderá ter um valor numérico, string, V ou F, contéudo de uma arquivo, requisição...

let c = new Promise(function(cumprirPromessa) {  
    cumprirPromessa({
        x: 1,
        y: 2
    })  
})  

let b = new Promise(function(cumprirPromessa) {  
    cumprirPromessa(['Ana', 'João', 'Carlos'])  
})  

let d = new Promise(function(cumprirPromessa) {  
    cumprirPromessa([0, 1, 2])  
}) 

d.then(function(valor){  //then - recebe uma função como parâmetro e devolve o valor cumprido da promessa.
    console.log(valor)
})

b.then(valor => console.log(valor)) //arrow function
 
//function primeiroElemento(array) {
//     return Array[0]
//}

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {  
    resolve(['Ana', 'João', 'Carlos'])  
})  

const primeiroElemento = arrayOuString => arrayOuString[0]

 .then(valor =>  valor[0])
 .then(primeiro => primeiro[0])
 .then(letraMinuscula =>  console.log(letraMinuscula))
 .then(primeiroElemento)
 .then(primeiraLetra)
 .then(letraMinuscula)
 .then(console.log)


