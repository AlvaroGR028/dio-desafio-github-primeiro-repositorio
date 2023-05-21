// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
const pessoa = {
    nome: 'alvaro', 
    sobrenome: 'goncalves'
};



const nomes = ['Lucas', 'Vinicius', 'Pedro', 'Vitoria', 'Emanuela', 'Valdileia', 'Victor', 'Pablo'];
var letraComparacao = "V";

for (let i = 0; i < pessoa.length; i++) {
    var primeiraLetra = pessoa[i].charAt(0);


  if (primeiraLetra === letraComparacao) {
        console.log(pessoa[i] + " começa com a letra " + letraComparacao);

    } else {
    }

}

