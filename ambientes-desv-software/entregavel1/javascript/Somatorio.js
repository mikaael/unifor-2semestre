    var n = Number(prompt("Quantos valores serão somados?"));
    var soma = 0;
        for( i=1; i<=n; i++) {
            var num = Number(prompt(i + "º Valor: "));
                soma = soma + num;
            }
            console.log("Somatório: " + soma);
