function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolved(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
   .than(frase => frase.concast('?!?'))
   .then(outraFrase => console.log(outraFrase))

   //.catch( e => console.log(e))