// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const palio = new Carro('Fiat', 'Cinza', 1 / 10);
console.log(palio.calcularGastoDePercurso(100, 4.49).toFixed(2));

const gol = new Carro('volkswagen', 'Cinza', 1 / 11);
console.log(gol.calcularGastoDePercurso(100, 4.49).toFixed(2));
