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
let categoriaVendas = []
vendas.forEach( (venda) => {
    soma = 0
    vendas.forEach( (produto) => {
        if (venda.categoria == produto.categoria){
            soma += produto.valor * produto.quantidade
        }
    })
    categoriaVendas.push({
        categoria: venda.categoria, valorTotal: soma
    })
})

// Função para remover categorias repetidas
let categoriaVendasFiltradas = categoriaVendas.filter( (venda, i) => {
    return categoriaVendas.findIndex(v => v.categoria == venda.categoria) === i
})

let maior = categoriaVendasFiltradas[0].valorTotal
let indice = 0
categoriaVendasFiltradas.forEach( (venda, i) => {
    if (venda.valorTotal > maior){
        maior = venda.valorTotal
        indice = i
    }
})

console.log("Os valores totais de vendas por categoria foram: ", categoriaVendasFiltradas)
console.log(`A categoria '${categoriaVendasFiltradas[indice].categoria}' teve o maior valor de venda total, sendo ele: ${maior}`)
