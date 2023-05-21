const nome = 'Alvaro Goncalves Rodrigues'
 for (let i = 0; i < nome.length; i++) {
    const letra = nome [i];
    console.log(letra);
 }


const notas = [];

notas.push(10);
notas.push(7);
notas.push(12);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);