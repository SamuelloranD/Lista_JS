const prompt = require('prompt-sync')();

let tarefas = [];

for (let i = 0; i < 5; i++) {
    let tarefa = prompt(`Digite uma tarefa ${i + 1}: `);
    tarefas.push(tarefa);
}

console.log("\nTarefas cadastradas:");
for (let i = 0; i < tarefas.length; i++) {
    console.log(`${i + 1}. ${tarefas[i]}`);
}

let indice = parseInt(prompt("\nQual tarefa deseja marcar como concluída? (Digite o número correspondente): "));

if (indice > 0 && indice <= tarefas.length) {
    tarefas.splice(indice - 1, 1);
    console.log("\nTarefa marcada como concluída e removida com sucesso!");
} else {
    console.log("\nNúmero inválido!");
}

console.log("\nLista atualizada de tarefas:");
for (let i = 0; i < tarefas.length; i++) {
    console.log(`${i + 1}. ${tarefas[i]}`);
}