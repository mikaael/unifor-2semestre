
function mdc(mdcA, mdcB){
        var mdc = 1;
        var bigger;
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

        return "MDC é: " + mdc;
}

module.exports = mdc;