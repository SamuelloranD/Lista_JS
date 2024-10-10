const produtos = [
    { nome: 'Produto A', preco: 10.50, quantidade: 20 },
    { nome: 'Produto B', preco: 5.75, quantidade: 15 },
    { nome: 'Produto C', preco: 8.00, quantidade: 30 }
  ];
  
  function calcularValorTotalEstoque(produtos) {
    let valorTotal = 0;

    for (let i = 0; i < produtos.length; i++) {
      valorTotal += produtos[i].preco * produtos[i].quantidade;
    }
  
    return valorTotal;
  }
  
  const valorTotalEstoque = calcularValorTotalEstoque(produtos);
  console.log(`O valor total do estoque é: R$ ${valorTotalEstoque.toFixed(2)}`);
