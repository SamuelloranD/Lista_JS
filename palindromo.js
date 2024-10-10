const prompt = require('prompt-sync')();

function verificaPalindromo(palavra) {
    let tamanho = palavra.length;
    for (let i = 0; i < tamanho / 2; i++) {
        if (palavra[i] !== palavra[tamanho - 1 - i]) {
            return `A palavra "${palavra}" não é um palíndromo.`;
        }
    }
    return `A palavra "${palavra}" é um palíndromo.`;
}

let palavra = prompt('Digite uma palavra: ').toUpperCase(); 

console.log(verificaPalindromo(palavra));