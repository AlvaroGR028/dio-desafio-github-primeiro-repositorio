// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas:
// 1 - Preço do combustível;
// 2 - Valor médio de combustível gasto do carro por KM;
// 3 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const precoCombustivel = 5.49;
const kmLitro = 12;
const distanciaKm = 220;
//kmlitro*precoCombustivel=distanciaKm
//kmlitro=distanciaKm/precoCombustivel

const litrosConsumidos = distanciaKm / kmLitro;
const valorGasto = litrosConsumidos*precoCombustivel;

console.log(valorGasto.toFixed(2));