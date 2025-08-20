
//Objeto:
let pessoa = {
    nome: "Jeremias",
    idade: 10,
    altura: 1.5,
    peso: 45,
    cpf: "67599912366"
}

console.log(pessoa)
console.log(pessoa.nome)

//Vetor de Objetos:
let pessoas = [
    {    
        nome: "Jeremias",
        idade: 15,
        altura: 1.5,
        peso: 45,
        cpf: "67599912366"
    }, 
    {
        nome: "Jubileu",
        idade: 65,
        altura: 1.8,
        peso: 80,
        cpf: "14375847856"
    },
    {
        nome: "Jaqueline",
        idade: 25,
        altura: 1.9,
        peso: 100,
        cpf: "96059483756"
    }
]

console.log(`Nome da pessoa na posição 2: ${pessoas[1].nome}`)
console.log(`Peso da pessoa na posição 3: ${pessoas[2].peso}kg`)

//Exibir todos os valores de um atributo em uma Vetor de Objeto:
console.log("Todas as idades:")
for (let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].idade}\n`)
}

//Usando push para preencher os valores:
let usuarios = []

for (let i = 0; i < 2; i++){
    let nome = prompt(`Informe o nome do usuário ${i+1}:`)
    let email = prompt(`Informe o email do usuário ${i+1}:`)
    let senha = prompt(`Informe o senha do usuário ${i+1}:`)

    let usuario = {
        nome: nome,
        email: email,
        senha: senha
    }
    usuarios.push(usuario);
}

console.log(usuarios)
