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

function exercicio3(){
    let matriz = []
    let regiao = ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"]
    let dias = [10, 11, 12, 13, 14]

    for (l = 0; l < 5; l++){
        matriz[l] = []
        for (c = 0; c < 5; c++){
            do{
                matriz[l][c] = Number(prompt(`Forneça o valor de poluição (entre 0 e 500) da região ${regiao[l]} no dia ${dias[c]}: `))
            } while (matriz[l][c] < 0 || matriz[l][c] > 500)
        }
    }

    let diagonalPrincipal = []
    let diagonalPrincipalSoma = 0
    let diagonalSecundaria = []
    let diagonalSecundariaSoma = 0
    for (l = 0; l < 5; l++){
        diagonalPrincipal[l] = matriz[l][l]
        diagonalPrincipalSoma += matriz[l][l]
        diagonalSecundaria[l] = matriz[l][4-l]
        diagonalSecundariaSoma += matriz[l][4-l]
    }
    let diagonalPrincipalMedia = diagonalPrincipalSoma / diagonalPrincipal.length
    let diagonalSecundariaMedia = diagonalSecundariaSoma / diagonalSecundaria.length

    let maiorIndice = matriz[0][0]
    let maiorIndiceRegiao = regiao[0]
    let maiorIndiceDia = dias[0]
    let maior300 = 0
    let menorPoluicaoRegiaoSoma = 0
    let poluicaoRegiaoMediaLinha = []
    for (l = 0; l < 5; l++){
        for (c = 0; c < 5; c++){
            if(maiorIndice < matriz[l][c]){
                maiorIndice = matriz[l][c]
                maiorIndiceRegiao = regiao[l]
                maiorIndiceDia = dias[c]
            }

            if (matriz[l][c] > 300){
                maior300++;
            }
            
            menorPoluicaoRegiaoSoma += matriz[l][c]
        }
        menorPoluicaoRegiaoMedia = menorPoluicaoRegiaoSoma / matriz.length
        poluicaoRegiaoMediaLinha[l] = menorPoluicaoRegiaoMedia
        menorPoluicaoRegiaoSoma = 0
        menorPoluicaoRegiaoMedia = 0
    }

    let menorPoluicaoRegiaoMedia = poluicaoRegiaoMediaLinha[0]
    for (l = 0; l < 5; l++){
        if (menorPoluicaoRegiaoMedia > poluicaoRegiaoMediaLinha[l]){
            menorPoluicaoRegiaoMedia = poluicaoRegiaoMediaLinha[l]
        }
    }
    
    console.log(matriz)
    console.log(`Os valores da diagonal principal são: ${diagonalPrincipal} \n 
    Já a média desses valores é: ${diagonalPrincipalMedia.toFixed(2)}`)
    console.log(`Os valores da diagonal secundária são: ${diagonalSecundaria} \n 
    Já a média desses valores é: ${diagonalSecundariaMedia.toFixed(2)}`)
    console.log(`O maior índice de de poluição foi: ${maiorIndice} \n 
    Ele ocorreu na região ${maiorIndiceRegiao} no dia ${maiorIndiceDia}`)
    console.log(`O nível de poluição passou de 300 em ${maior300} dias diferentes`)
    console.log()
}
