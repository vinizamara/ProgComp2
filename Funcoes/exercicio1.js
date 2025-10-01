//Exercicio 1
function mostrarDobro(x){
    let dobro = x * 2
    console.log("O dobro do número", x, ", É igual a:", dobro)
}

function quadrado(x){
    return Number(x * x)
}

function main(){
    let x = Number(prompt(`Forneça um valor númerico:`))

    mostrarDobro(x)
    let xQuadrado = quadrado(x)

    console.log(`O quadrado do número ${x} é ${xQuadrado}`)
}

main()
