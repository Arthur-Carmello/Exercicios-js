function ano_bissexto(ano){
    if((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)){
        return true
    }
    else {
        return false
    }       
}

console.log(ano_bissexto(2019))