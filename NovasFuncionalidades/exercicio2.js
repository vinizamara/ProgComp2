//Exercício com map()

let precosUSD = [10, 25.50, 8, 100, 35.25]

let precosCovertidos = precosUSD.map((valor, i) => {
    valor = valor * 5
    return valor.toFixed(2)
})

console.log(`Os preços do vetor que estão em dolarés: ${precosUSD}\n Os preços do vetor convertidos para real: ${precosCovertidos}`)

//Exercício com filter()

let idades = [12, 17, 25, 15, 34, 60, 8];

let adultos = idades.filter( (idade, i) => {
    return idade >= 18
})

console.log(`O vetor com todas as idades: ${idades} \n O vetor com somente as idades que são maiores ou iguais a 18: ${adultos}`)

// Exercício com reduce()

let vendas = [150, 300, 50, 450, 100];

let totalVendas = vendas.reduce( (acc, venda) => {
    return acc + venda
}, 0)

console.log(`Os valores de vendas do dia: ${vendas} \n O total de vendas foi: R$${totalVendas}`)

