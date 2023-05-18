//condição para ver se o número é par
// É usado === porque compara o mesmo valor e tipo
// Se usasse == iria ver o mesmo valor, mas poderia ser outro tipo.

/*const numero = 0;
const numeroPar = (numero % 2) === 0; 
console.log(numeroPar);

//a condicional vem dentro do parenteses
if (numeroPar){
    console.log('É um número par');
} else {
    console.log('É um numero impar');
}*/

const numero = 13;
const isNumeroDivisivelPor5 = (numero % 5) === 0; 

if (numero === 0){
    console.log('O número é inválido');
} else if (isNumeroDivisivelPor5){
    console.log('Sim');
} else {
    console.log('Não');
}








// const camisetaAlvaroAzul = true;
// const camisetaAnaAzul = false;

// 10 >= 10