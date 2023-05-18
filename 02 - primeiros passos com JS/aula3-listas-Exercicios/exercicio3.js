// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// 1 - À vista Débito, recebe 10% de desconto;
// 2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// 3 - Em duas vezes, preço normal de etiqueta sem juros;
// 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

const precoEtiqueta = 200;
const condicaoPagamento = 4;

if (condicaoPagamento === 1) {
    const valorPago = precoEtiqueta * 0.9;
    console.log(valorPago.toFixed(2));
} else if (condicaoPagamento === 2) {
    const valorPago = precoEtiqueta * 0.85;
    console.log(valorPago.toFixed(2));
}
else if (condicaoPagamento === 3) {
    const valorPago = precoEtiqueta;
    console.log(valorPago.toFixed(2));
} else if (condicaoPagamento === 4) {
    const valorPago = precoEtiqueta * 1.1;
    console.log(valorPago.toFixed(2));
} else {
    console.log('Condição Inválida');
}