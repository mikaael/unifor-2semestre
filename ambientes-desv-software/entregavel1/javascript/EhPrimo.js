//var numero = Number(prompt("Teste se o valor é primo"));

EhPrimo(4);
function EhPrimo(numero){
  var tester = 0;
            
  for(var i = 1; i <= numero; i++) {
      if(numero % i == 0) {
          tester++;
      }
  } if(tester == 2) {
      console.log("É primo!");
              
  } else {
      console.log("Não é primo!");
  }
}

