function comparajogos(maior, menor){

    const pontos = [12, 1, 10, 4, 20]

    for(i = 0; i < pontos.length; i++){
    if(pontos[i] > pontos[i+1]){
        maior = pontos[i];
        return ("O maior numero eh: " + maior)
    }
    else {
        menor = pontos[i+1]
        return ("O maior numero eh: " + menor) 
    } 
  }
}

console.log(comparajogos())


