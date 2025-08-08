    let livros = []

    for (let i = 0; i < 2; i++){
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



