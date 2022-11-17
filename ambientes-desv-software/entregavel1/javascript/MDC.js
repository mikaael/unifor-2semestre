   var mdcA = Number(prompt("MDC: digite o primeiro valor."));
    var mdcB = Number(prompt("MDC: digite o segundo valor."));
    var mdc = 1;
    var bigger;
    
    console.log("MDC de A e B.");
    
    bigger = mdcA;
        if (mdcA > mdcB){
                bigger = mdcA;
        } if (mdcB > mdcA) {
                bigger = mdcB;
        }
    
        for (var g = 2; g <= bigger; ++g){
            while((mdcA % g==0) && (mdcB % g == 0)){
                    mdcA = mdcA / g;
                    mdcB = mdcB / g;
                    mdc = mdc * g;
            }
        }
    
    console.log("MDC é: " + mdc);
    
