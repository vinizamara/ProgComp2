//Exemplo de função de objeto

function listarNomes(alunos){
    for(let i = 0; i < alunos.length; i++){
        console.log(alunos[i].nome)
    }
}

function aumentarIdade(alunos) {
    for (let aluno of alunos) {
        aluno.idade += 1
    }
}

function cadastroInicial(alunos) {
    alunos.push({ nome: "Ana", idade: 20, curso: "Sistemas de Informação"})
    alunos.push({ nome: "Carlos", idade: 22, curso: "Ciência da Computação"})
    alunos.push({ nome: "Beatriz", idade: 19, curso: "Engenharia de Software"})
}

function cadastraNovo(alunos) {
    let nome = prompt(`Qual o nome do novo aluno?`)
    let idade = Number(prompt(`Qual a idade do novo aluno?`))
    let curso = prompt(`Qual o curso do novo aluno?`)
    alunos.push({ nome: nome, idade: idade, curso: curso})
}

function removeAluno(alunos, nome){
    for (let i = 0; i < alunos.length; i++){
        if(alunos[i].nome.toUpperCase() == nome.toUpperCase()){
            alunos.splice(i, 1)
            alert(`Aluno remvido com sucesso!`)
            return
        }
    }
}

function main(){
    let vetor = []
    cadastroInicial(vetor)
    let opcao
    do {
        opcao = Number(prompt(`Digite:\n 1. Cria aluno\n2. Lista Nomes\n3. Atualiza idade\n4. Remove aluno\n5. Sair`))
        switch(opcao){
            case 1: cadastraNovo(vetor); break;
            case 2: listarNomes(vetor); break;
            case 3: aumentarIdade(vetor); break;
            case 4: let nomeRemove = prompt(`Informe o nome para remover: `)
                    removeAluno(vetor, nomeRemove); break;
            case 5: alert(`Programa encerrado!`); break;
            default: alert(`Opção Inválida`); break;
        }
    }
    while (opcao != 4);
    console.log(vetor)
}

main()
