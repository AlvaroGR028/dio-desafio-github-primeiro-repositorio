
//classe é a definição do que deve ser o Objeto
//Instancia é uma ocorrência daquele objeto

class Pessoa {
    nome;
    idade;
    anoDeNascimento

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) do que ${p2.nome}`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho(a) do que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const alvaro = new Pessoa('Alvaro', 20);
const ana = new Pessoa('Ana', 21);

compararPessoas(alvaro, ana);