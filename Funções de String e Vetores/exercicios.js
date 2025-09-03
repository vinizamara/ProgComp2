function exercicio1(){
    let palavra = prompt("Informe uma palavra")
    // Retira os espaços antes e depois
    let limpa = palavra.trim()
    // Cria um vetor da palavra limpa
    let vetor = limpa.split("")
    // Inverte palavra do tipo vetor
    let invertida = vetor.reverse()
    // Converte vetor em string
    let invertidaString = invertida.join("")

    if (invertidaString === limpa){ // compara duas strings
        alert('São palíndromas')
    }
    else alert('Não são palíndromas')
}
