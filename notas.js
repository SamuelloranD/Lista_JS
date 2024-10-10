const prompt = require('prompt-sync')();

let aluno = {
    nome: prompt('Digite o nome do aluno: '),
    notas: [],
    media: function() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }
};

for (let i = 0; i < 3; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i + 1}: `));
    aluno.notas.push(nota);
}

console.log(`\nO aluno ${aluno.nome} tem média igual a: ${aluno.media().toFixed(2)}`);