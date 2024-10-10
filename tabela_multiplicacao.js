const prompt = require('prompt-sync')();

function tabelaMultiplicacao(numero) {
    if (numero <= 0) {
        console.log('[ERRO] Insira um número positivo.');
        return;
    }

    console.log(`\nTabela de multiplicação do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

let numero = parseInt(prompt('Digite um número positivo para gerar a tabela de multiplicação: '));

tabelaMultiplicacao(numero);
