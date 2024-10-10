function calculadora(n1, n2, operacao) {
    if (operacao === 'soma') {
        return n1 + n2;
    } else if (operacao === 'subtracao') {
        return n1 - n2;
    } else if (operacao === 'multiplicacao') {
        return n1 * n2;
    } else if (operacao === 'divisao') {
        if (n2 === 0) {
            return 'Erro: divisão por zero';
        }
        return n1 / n2;
    } else {
        return 'Operação inválida';
    }
}

console.log(calculadora(1, 2, 'soma'));     
console.log(calculadora(3, 1, 'subtracao'));  
console.log(calculadora(10, 10, 'multiplicacao'));  
console.log(calculadora(10, 5, 'divisao'));        