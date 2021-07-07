function juros_simples(cap_ini, taxa_juros, tempo_aplic) {
    return cap_ini * taxa_juros * tempo_aplic
}

function juros_compostos(cap_ini, taxa_juros, tempo_aplic){
    return cap_ini * Math.pow((1 + taxa_juros), tempo_aplic)
} 

console.log(("Juros Simples: " + juros_simples(1000,10,12)))
console.log(("Juros Compostos: " + juros_compostos(1000,10,12)))

