// rest - juntar
// spread - espalhar

// pode ser usado como parametro de função e com objeto

// usar spread como objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } // espalhando os atributos de funcionario
console.log(clone)

// usar spread como array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)