function somatorio(numeros){
    var soma = 0;
    for( i=0; i<numeros.length; i++) {
        soma = soma + numeros[i];
    }
    return "Somatório: " + soma;
}

module.exports = somatorio;