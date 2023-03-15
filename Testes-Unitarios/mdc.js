function mdc(a, b) {
        while (b !== 0) {
            var r = a % b;
            a = b;
            b = r;
        }
        return a;
    }
    //Calcula o MDC de uma lista de números
    function mdcLista(numberList) {
        var mdcResultado = numberList[0];

        for (var i = 1; i < numberList.length; i++) {
            mdcResultado = mdc(mdcResultado, numberList[i]);
            console.log(mdcResultado);
        }
        return mdcResultado;
    }
    mdcLista([160, 32, 26]);

    module.exports = {mdc, mdcLista};
