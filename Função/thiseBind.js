const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflio entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //amarrar o objeto
falarDePessoa()