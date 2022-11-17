    var fib = Number(prompt("Quantas números terão no fibonacci?"));
    
            var k = 1;
            var q = 0;
            
            for(var j=1; j<=fib; j++) {
    
                if(j < 2){
                    console.log(1);
    
                } else {
    
                    k = k + q;
                    q = k - q;
    
                    console.log(k + ", ");
                }
            }
