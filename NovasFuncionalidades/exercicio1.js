// Análise de Notas com forEach

let notas = [8.5, 7.0, 9.2, 6.8, 5.5, 10.0, 4.3, 8.9, 7.7, 9.8]

let soma = 0
let aprovados = 0
let notasPosicoesPares = []

notas.forEach(function(nota, i){
    console.log(nota.toFixed(2))
    soma += nota

    if (nota >= 7){
        aprovados++
    }
     if (i % 2 == 0){
        notasPosicoesPares.push(nota.toFixed(2))
    }
})


console.log(`A soma das notas foi: ${soma.toFixed(2)}`)
console.log(`A média das notas foi: ${(soma/notas.length).toFixed(2)}`)
console.log(`O número de alunos aprovados foi: ${aprovados}`)
console.log(`As notas do vetor que estavam nas posições pares eram: ${notasPosicoesPares}`)

/* Função forEach com arrow function:
notas.forEach((nota, i) => {
    console.log(nota.toFixed(2))
    soma += nota

    if (nota >= 7){
        aprovados++
    }
     if (i % 2 == 0){
        notasPosicoesPares.push(nota.toFixed(2))
    }
})
*/

