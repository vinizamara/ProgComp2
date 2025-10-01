//Exercício 3
function preencher(vet){
    vet.push("Felipe", "Guilherme", "Ardo", "Vinícius", "Pedro")
}

function maiuscula(vet){
    for (let i = 0; i < vet.length; i++){
        vet[i] = vet[i].toUpperCase()
    }
}

function anonimo(vet){
    for (let i = 0; i < vet.length; i++){
        if (vet[i][0] == "A"){
            vet[i] = "Anônimo"
        }
    }
}

function escreva(texto, vetor){
    console.log(texto, vetor)
}

function main(){
    let v = []

    preencher(v)
    escreva("Vetor Inicial:", v)
    maiuscula(v)
    escreva("Vetor com letras maiusculas:", v)
    anonimo(v)
    escreva("O vetor com todas as pessoas que o nome começa com a letra 'A' sendo transformados para 'Anônimo':", v)
}

main()
