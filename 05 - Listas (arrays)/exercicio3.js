// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ['Lucas', 'Vinicius', 'Pedro', 'Vitoria', 'Emanuela', 'Valdileia', 'Victor', 'Pablo'];
var letraComparacao = "V";

for (let i = 0; i < nomes.length; i++) {
    var primeiraLetra = nomes[i].charAt(0);


  if (primeiraLetra === letraComparacao) {
        console.log(nomes[i] + " começa com a letra " + letraComparacao);

    } else {
    }

}

