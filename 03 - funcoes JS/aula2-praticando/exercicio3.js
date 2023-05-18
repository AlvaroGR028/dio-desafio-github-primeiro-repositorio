// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// 1 - À vista Débito, recebe 10% de desconto;
// 2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// 3 - Em duas vezes, preço normal de etiqueta sem juros;
// 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

function alerarValor (valor, condicaoPagamento) {
    if (condicaoPagamento === 1) {
        const valorPago = valor * 0.9;
        return valorPago.toFixed(2);
    } else if (condicaoPagamento === 2) {
        const valorPago = valor * 0.85;
        return valorPago.toFixed(2);
    }
    else if (condicaoPagamento === 3) {
        const valorPago = valor;
        return valorPago.toFixed(2);
    } else if (condicaoPagamento === 4) {
        const valorPago = valor * 1.1;
        return valorPago.toFixed(2);
    } else {
        return 'Condição Inválida';
    }
}
console.log(alerarValor(200,2));


function alterarValor2(valor, condicaoPagamento) {
    if (condicaoPagamento === 1) {
        const valorPago = valor * 0.9;
        console.log(valorPago.toFixed(2));
    } else if (condicaoPagamento === 2) {
        const valorPago = valor * 0.85;
        console.log(valorPago.toFixed(2));
    } else if (condicaoPagamento === 3) {
        const valorPago = valor;
        console.log(valorPago.toFixed(2));
    } else if (condicaoPagamento === 4) {
        const valorPago = valor * 1.1;
        console.log(valorPago.toFixed(2));
    } else {
        console.log('Condição Inválida');
    }
}

alterarValor2(100, 2);