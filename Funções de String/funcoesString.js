let frase = "Estou estudando JS"

//A String é um Vetor em JavaScript
console.log(frase[4])

//Ver tamanho da String, ele começa em 0 e conta também os espaços
console.log(frase.length)

//Passa a frase para maiusculo
console.log(frase.toUpperCase())

//Passa a frase para minusculo
console.log(frase.toLocaleLowerCase())

//Verifica se um determinado texto está na frase
frase.toUpperCase().includes('JS')
frase.toUpperCase().includes('ESTU')

//Pega os 5 primeiros valores do vetor (ele não pega o 5)
frase.slice(0,5)
//Começa ao contrario
frase.slice(-5)
