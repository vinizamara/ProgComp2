// Análise de Vendas por Categoria

let vendas = [
    { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
    { produto: "Mouse", categoria: "Informática", valor: 80, quantidade: 5 },
    { produto: "Camiseta", categoria: "Moda", valor: 50, quantidade: 10 },
    { produto: "Tênis", categoria: "Moda", valor: 250, quantidade: 4 },
    { produto: "Livro", categoria: "Educação", valor: 40, quantidade: 7 },
    { produto: "Tablet", categoria: "Informática", valor: 1500, quantidade: 1 }
];

let total = 0
vendas.forEach( (venda, i) => {
    total += venda.valor * venda.quantidade
})

console.log("O valor total de vendas foi:", total)
