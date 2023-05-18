//Função calcular IMC

function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}
function classificarImc (imc){
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obsesidade Grave';
    }
}

function main (){
    const peso = 92;
    const altura = 1.78;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();

//Função anonima calcular IMC 

function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}
function classificarImc (imc){
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obsesidade Grave';
    }
}

(function (){
    const peso = 92;
    const altura = 1.78;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}) ();



// Pequeno texto de código que você consegue usar ele varias vezes e usando paramentros

// Função para falar seu nome:
// function sayMyName (name){
// console.log('your name is :' + name);
// }
// sayMyName('Alvaro');
// sayMyName('Goncalves');

//Função para incrementar Juros
// function incrementarJuros(valor, percentualJuros) {
//     const valorDeAcrescimo = (percentualJuros / 100) * valor;
//     return valor + valorDeAcrescimo;
// }
// console.log(incrementarJuros(100, 10))
// console.log(incrementarJuros(100, 25))






