EhPrimo(4);
function EhPrimo(numero){
  var tester = 0;
            
  for(var i = 1; i <= numero; i++) {
      if(numero % i == 0) {
          tester++;
      }
  } if(tester == 2) {
      return "É primo!";
  } else {
      return "Não é primo!";
  }
}

module.exports = EhPrimo;