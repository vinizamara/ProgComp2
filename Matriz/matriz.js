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
