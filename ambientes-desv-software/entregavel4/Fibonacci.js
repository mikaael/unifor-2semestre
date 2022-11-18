function fibonacci(fib){
    let ant = 0;
    let at = 1;
    let resultado = "0, ";

    for(let i = 1; i < fib; i++){
      if(i == fib - 1){
        resultado += at + ".";
      }else{
        resultado += at + ", ";
      }
      let aux = at;
      at = ant + aux;
      ant = aux;
    }
    return resultado;
}

module.exports = fibonacci;