function add(a, b) {

    let total = a + b

    return total
}


console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


//-----------------------------------------------------------------------------------------



function multiply(vezesASeRepetir, NumeroASerRepetido) {

    let total = 0

    for (let i = 0; i < vezesASeRepetir; i++) {

        total = add(total, NumeroASerRepetido)

    }
    return total
}


console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

//-----------------------------------------------------------------------------------------

function power(NumeroASerRepetido, totalDeVezesASeRepetir) {

    let total = NumeroASerRepetido

    for (let i = 1; i < totalDeVezesASeRepetir; i++) {

        total = multiply(total, NumeroASerRepetido)

    }
    return total
}


console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');

//-----------------------------------------------------------------------------------------

function factorial(n) {

    let total = n

    for (let i = n; i > 1; i--) {

        total = multiply(total, i - 1)
    }
    return total
}

console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

//-----------------------------------------------------------------------------------------

function fibonacci(n) {

    let numeroAnterior = 0
    let numeroAtual = 1
    let resultado = 0

    if (n > 1) {

        for (let i = 2; i <= n; i++) {

            resultado = add(numeroAnterior, numeroAtual)

            numeroAnterior = numeroAtual
            numeroAtual = resultado

        }
        return resultado
    }
   
    return n == 1 ? numeroAtual: numeroAnterior
}

console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');