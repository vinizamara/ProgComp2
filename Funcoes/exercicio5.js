//Gerenciamento de Funcionários em uma Empresa

function cadastroInicial(vetor){
    vetor.push({nome: "Felipe", cargo: "Assistente Geral", salario: 1200})
    vetor.push({nome: "Guilherme", cargo: "Gerente", salario: 5000})
    vetor.push({nome: "Jeremias", cargo: "Empacotador", salario: 3500})
}

function cadastrarFuncionario(vetor) {
    let nome = prompt(`Qual o nome do novo funcionário?`)
    let cargo = prompt(`Qual o cargo do novo fucionário?`)
    let salario = Number(prompt(`Qual o curso do novo funcionário?`))
    vetor.push({ nome: nome, cargo: cargo, salario: salario})
}

function listarNomes(vetor){
    for (let i = 0; i < vetor.length; i++){
        console.log(vetor[i].nome)
    }
    alert(`Os nomes foram escritos no console!`)
}

function aumentarSalarios(vetor){
    for (let i = 0; i < vetor.length; i++){
        vetor[i].salario = vetor[i].salario * 1.10
    }
    alert("Os salário foram aumentados em 10%")
}

function encontrarSalario(vetor){
    let nome = prompt(`Informe o nome do funcionário que deseja verificar o salário: `)
    for (let i = 0; i < vetor.length; i++){
        if(vetor[i].nome.toUpperCase().trim() == nome.toUpperCase()){
            alert(`O salário do funcionário é ${vetor[i].salario}`)
            return
        }
    }
    alert("Não foi possivel encontrar um funcionario com esse nome")
}

function atualizarCargo(vetor){
    let nome = prompt(`Informe o nome do funcionário que deseja atualizar o cargo: `)
    for (let i = 0; i < vetor.length; i++){
        if(vetor[i].nome.toUpperCase().trim() == nome.toUpperCase()){
            let novoCargo = prompt(`Informe o novo cargo do funcionário ${vetor[i].nome}: `)
            vetor[i].cargo = novoCargo
            alert(`O cargo do funcionário foi atualizado!`)
            return
        }
    }
    alert("Não foi possivel encontrar um funcionario com esse nome")
}

function removerFuncionario(vetor, nome){
    for (let i = 0; i < vetor.length; i++){
        if(vetor[i].nome.toUpperCase() == nome.toUpperCase()){
            vetor.splice(i, 1)
            alert(`Funcionário removido com sucesso!`)
            return
        }
    }
}

function mediaSalarial(vetor){
    let soma = 0
    for (let i = 0; i < vetor.length; i++){
        soma += vetor[i].salario
    }
    let media = soma / vetor.length
    alert(`A Media Salarial dos funcinários é: ${mediaSalarial}`)
}

function main(){
    let funcionarios = []

    cadastroInicial(funcionarios)

    let opcao
    do {
        opcao = Number(prompt(`Qual opção você deseja?\n1. Cadastrar novo funcionário\n2.Listar todos os nomes dos funcionários\n3. Aumentar o salário de todos em 10%\n4. Buscar salário pelo nome\n5. Atualizar cargo de um funcionário\n6. Remover funcionário pelo nome\n7. Exibir média salarial da empresa\n 8. Encerrar programa`))
        switch(opcao){
            case 1:
                cadastrarFuncionario(funcionarios)
                break
            case 2:
                listarNomes(funcionarios)
                break
            case 3:
                aumentarSalarios(funcionarios)
                break
            case 4:
                encontrarSalario(funcionarios)
                break
            case 5:
                atualizarCargo(funcionarios)
                break
            case 6:
                let nomeRemover = prompt(`Informe o nome do funcionário que deseja remover: `)
                removerFuncionario(funcionarios, nomeRemover)
                break
            case 7:
                mediaSalarial(funcionarios)
                break
            case 8: 
                alert(`Programa encerrado!`)
                break
            default:
                alert(`Opção Inválida`)
                break
        }
    } while (opcao != 8)

    console.log(funcionarios)
}

main()
