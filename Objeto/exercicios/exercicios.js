function exercicio1(){
    let livros = []

    for (let i = 0; i < 5; i++){
        let titulo = prompt(`Informe o titulo do livro ${i+1}:`)
        let autor = prompt(`Informe o autor do livro ${i+1}:`)
        let ano = prompt(`Informe o ano de publicação do livro ${i+1}:`)
        let paginas = Number(prompt(`Informe o número de páginas do livro ${i+1}:`))

        let livro = {
            titulo: titulo,
            autor: autor,
            ano: ano,
            paginas: paginas
        }
        livros.push(livro);
    }

    let maiorDe300Paginas = []
    let maiorQuantidadePaginas = livros[0].paginas
    let maiorQuantidadePaginasTitulo = livros[0].titulo
    let somaPaginas = 0

    for (let i = 0; i < livros.length; i++) {
        if (livros[i].paginas > 300){
            maiorDe300Paginas.push(livros[i].titulo)
        }

        if (livros[i].paginas > maiorQuantidadePaginas){
            maiorQuantidadePaginasTitulo = livros[i].titulo
        }

        somaPaginas += livros[i].paginas
    }

    let mediaPaginas = somaPaginas/livros.length

    console.log("O titulo do(s) livro(s) com mais de 300 páginas é/são: ", maiorDe300Paginas)
    console.log("O livro com maior quantidade de páginas é: ", maiorQuantidadePaginasTitulo)
    console.log("A média de páginas de todos os livros cadastrados é: ", mediaPaginas)
}

function exercicio2(){
    let funcionarios = []

    for (let i = 0; i < 3; i++){
        let nome = prompt(`Informe o nome do funcionário ${i+1}:`)
        let cargo = prompt(`Informe o cargo do funcionário ${i+1}:`).toLowerCase()
        let salario = Number(prompt(`Informe o salario do funcionário ${i+1}:`))
        let tempoServico = Number(prompt(`Informe o tempo de serviço do funcionário ${i+1}:`))

        let funcionario = {
            nome: nome,
            cargo: cargo,
            salario: salario,
            tempoServico: tempoServico
        }
        funcionarios.push(funcionario);
    }

    funcionarios5000e5Anos = []
    maiorSalario = funcionarios[0].salario
    maiorSalarioNome = funcionarios[0].nome
    somaSalario = 0
    funcionariosGerentes = 0

    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario > 5000 && funcionarios[i].tempoServico > 5){
            funcionarios5000e5Anos.push(funcionarios[i].nome)
        }
        if (funcionarios[i].salario > maiorSalario){
            maiorSalario = funcionarios[i].salario
            maiorSalarioNome = funcionarios[i].nome
        }
        somaSalario += funcionarios[i].salario
        if (funcionarios[i].cargo == "gerente"){
            funcionariosGerentes++
        }
    }

    mediaSalario = somaSalario/funcionarios.length

    console.log("Os funcionários que ganham mais de 5000 com mais de 5 anos de serviço: ", funcionarios5000e5Anos)
    console.log("O nome do funcionário com maior salário é: ", maiorSalarioNome)
    console.log("A média salarial da empresa é: ", mediaSalario)
    console.log("A empresa possui: ", funcionariosGerentes, " funcionários no cargo de gerente")
}

function exercicio3(){
    let projetos = []

    for (i = 0; i < 3; i++){
        let projeto = {
            nomeProjeto: prompt(`Qual o nome do projeto ${i + 1}?`),
            empresa: prompt(`Qual o nome da empresa do projeto ${i + 1}?`).toLowerCase(),
            duracaoMeses: Number(prompt(`Qual a duração de desenvolvimento do projeto ${i + 1} em quantidade de meses?`)),
            orcamento: parseFloat(prompt(`Qual foi o orçamento, em reais, para o projeto ${i + 1}`))
        }

        projetos.push(projeto)
    }

    let duracaoMesesEOrcamento = []
    let maiorOrcamento = projetos[0].orcamento
    let maiorOrcamentoNome = projetos[0].nomeProjeto
    let somaDuracao = 0
    let projetosInova = 0
    let totalGasto = 0

    for (i = 0; i < projetos.length; i++){
        if (projetos[i].duracaoMeses > 12 && projetos[i].orcamento > 1000000.00){
            duracaoMesesEOrcamento.push(projetos[i].nomeProjeto)
        }
        if (projetos[i].orcamento > maiorOrcamento){
            maiorOrcamento = projetos[i].orcamento
            maiorOrcamentoNome = projetos[i].nomeProjeto
        }
        somaDuracao += projetos[i].duracaoMeses
        if (projetos[i].empresa == "inovatech"){
            projetosInova++
        }
        if(projetos[i].duracaoMeses < 6){
            totalGasto += projetos[i].orcamento
        }
    }

    let mediaDuracao = somaDuracao/projetos.length

    console.log(`Todos os projetos cadrastados: `, projetos)
    console.log(`Os projetos cadastrados que possuem duração maior que 12 meses e orçamento maior que R$1.000.000,00 são: ${duracaoMesesEOrcamento}`)
    console.log(`O maior orçamento dentre os projetos mencionados foi o projeto: ${maiorOrcamentoNome}`)
    console.log(`A média de duração dos projetos foi ${mediaDuracao} meses`)
    console.log(`A empresa InovaTech desenvolveu ${projetosInova} projetos`)
    console.log(`O total gasto em orçamentos para prjetos com tempo de duração menor que 6 meses é: ${totalGasto}`)
}


