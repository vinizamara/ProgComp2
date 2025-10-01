//Exercicio 4

function carregarCidades(lista){
    lista.push("São Paulo", "Campinas", "Santos", "Sorocaba", "Caraguatatuba")
}

function padronizarNomes(lista){
    for (let i = 0; i < lista.length; i++){
        lista[i] = lista[i].toUpperCase()
    }
}

function marcarInterior(lista){
    for (let i = 0; i < lista.length; i++){
        if (lista[i][0] == "C"){
            lista[i] = `INTERIOR - ${lista[i]}`
        }
    }
}

function exibirCidades(texto, lista){
    console.log(texto, lista)
}

function main(){
    l = []
    carregarCidades(l)
    exibirCidades("Vetor Cidades Inicial:", l)
    padronizarNomes(l)
    exibirCidades("Vetor Cidades Maiuscula:", l)
    marcarInterior(l)
    exibirCidades("Vetor Cidades Com Indicação 'INTERIOR':", l)
}

main()
