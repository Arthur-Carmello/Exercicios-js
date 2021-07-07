console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia','Carlos','Mia')
console.log(aprovados)

aprovados = ['Bia','Carlos','Mia']
console.log(aprovados[0]) //de 0 a 2
console.log(aprovados[3]) //undefined

aprovados[3] = 'Paulo' //adicionei um elemento no indice 3
console.log(aprovados[3])
aprovados.push('Beatriz')
console.log(aprovados[4])
console.log(aprovados.length) // 4 elementos

aprovados[9] = 'Rafael' //setar um valor no indice 9
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //ordenar
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[0])
console.log(aprovados[2])
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') //a partir do indice 1, exclui 0 ou mais elementos e adiciona 
console.log(aprovados)