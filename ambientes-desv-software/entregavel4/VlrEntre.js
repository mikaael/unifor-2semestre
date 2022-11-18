function contagem(numeros){
    var contagem = 0;
    for( i=0; i<numeros.length; i++) {
        var num = numeros[i];
        var parte_fracao = parseInt(Math.round((num - parseInt(num)) * 100));
        if(parte_fracao == 0){
            contagem++;
        }        
    }
    return "Contagem dos números inteiros: " + contagem;
}

module.exports = contagem;