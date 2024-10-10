const prompt = require('prompt-sync')();

function coletarPessoas() {
  let pessoas = [];

  for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
    let idade = parseInt(prompt(`Digite a idade de ${nome}: `), 10);

    pessoas.push({ nome, idade });
  }

  return pessoas;
}

function maioresDeIdade(pessoas) {
  console.log("\nPessoas com mais de 18 anos:");

  for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade > 18) {
      console.log(pessoas[i].nome);
    }
  }
}

const pessoas = coletarPessoas();
maioresDeIdade(pessoas);