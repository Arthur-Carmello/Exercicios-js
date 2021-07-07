const nome = "Arthur3"

console.log(nome.charAt(4)) //pegar caractere
console.log(nome.charAt(7)) //Indice fora
console.log(nome.charCodeAt(3))
console.log(nome.indexOf('3'))

console.log(nome.substring(1)) //posições
console.log(nome.substring(0 , 3))

console.log('nome '.concat(nome).concat("!"))
console.log('nome '+ nome + "!")
console.log(nome.replace(3, "e")) //substituir 3 por e
console.log(nome.replace(/\w/, 'e')) 

console.log('Ana,Maria,Pedro'.split(','))