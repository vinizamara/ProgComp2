//Exercicio 1
function alterarNumero(x){
    x = 10
}

function alterarVetor(v){
    v[0] = 100
}

function main(){
    let a = 10
    alterarNumero(a)
    console.log(a)

    let b = [10,20,30]
    alterarVetor(b)
    console.log(b)
}

main()
