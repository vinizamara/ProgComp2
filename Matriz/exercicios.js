function exercicio1(){
    let matriz = []

    for (let i = 0; i < 3; i++){
        matriz[i] = []
        for (let j = 0; j < 3; j++){
            matriz[i][j] = Number(prompt(`Forneça o valor do número da posição ${i},${j}: `))
        }
    }

    console.log(matriz)

    let soma = 0
    let pares = 0
    let diagonal = []

    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            soma += matriz[i][j]
            if (matriz[i][j] % 2 === 0){
                pares++
            }
        }
        diagonal.push(matriz[i][matriz.length-1-i])
    }

    console.log(`A soma de todos os valores é: ${soma}`)
    console.log(`A quantidade de números pares é: ${pares}`)
    console.log(`A diagonal da matriz é: ${diagonal}`)
}

function exercicio2(){
    let matriz = []
    let nomeVendedor = []

    
    for(let i = 0; i < 4; i++){
        nomeVendedor[i] = prompt(`Digite o nome do vendedor ${i+1}: `)
    }

    for(let i = 0; i < 4; i++){
        matriz[i] = []
        for(let j = 0; j < 7; j++){
            matriz[i][j] = parseInt(Math.random() * 100)
            //matriz[i][j] = Number(prompt(`Forneça o valor das vendas do funcionario ${i+1}, no dia ${j+1}: `))
        }
    }

    let somaLinha = 0
    let maior = matriz[0][0]

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            somaLinha += matriz[i][j]
            if(maior < matriz[i][j]){
                maior = matriz[i][j]
            }
        }
        console.log(`A soma de vendas do vendedor ${nomeVendedor[i]} é: R$${somaLinha}`)
        somaLinha = 0
    }

    let somaColuna = 0
    let somaTotal = 0

    for(let i = 0; i < matriz[0].length; i++){
        for(let j = 0; j < matriz.length; j++){
            somaColuna += matriz[j][i]
        }
        console.log(`A soma de vendas dos vendedores no dia ${i+1} é: R$${somaColuna}`)
        somaTotal += somaColuna
        somaColuna = 0
    }

    let mediaTotal = somaTotal / (matriz.length * matriz[0].length)

    console.log(`O maior valor individual de vendas foi: R$${maior}`)
    console.log(`A média dos valores foi: R$${mediaTotal.toFixed(2)}`)
    console.log(matriz)
}
