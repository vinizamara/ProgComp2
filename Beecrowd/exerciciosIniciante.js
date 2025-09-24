// Hello World
function exercicio1000() {
    console.log("Hello World!");
}
  
// Soma de dois inteiros
function exercicio1001() {
    let A = 10;
    let B = 9;
    let X = A + B;
    console.log(`X = ${X}`);
}
  
// Área do círculo
function exercicio1002() {
    let n = 3.14159;
    let raio = 2.00;
    let area = n * (raio * raio);
    console.log(`A=${area.toFixed(4)}`);
}
  
// Soma simples
function exercicio1003() {
    let A = 30;
    let B = 10;
    let SOMA = A + B;
    console.log(`SOMA = ${SOMA}`);
}
  
// Produto simples
function exercicio1004() {
    let A = 3;
    let B = 9;
    let PROD = A * B;
    console.log(`PROD = ${PROD}`);
}
  
// Média com dois pesos (3.5 e 7.5)
function exercicio1005() {
    let A = 5.0;
    let B = 7.1;
    let MEDIA = ((A * 3.5) + (B * 7.5)) / 11;
    console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
}
  
// Média com três pesos (2, 3 e 5)
function exercicio1006() {
    let A = 5.0;
    let B = 6.0;
    let C = 7.0;
    let MEDIA = ((A * 2) + (B * 3) + (C * 5)) / 10;
    console.log(`MEDIA = ${MEDIA.toFixed(1)}`);
}
  
// Diferença de produtos
function exercicio1007() {
    let A = 5;
    let B = 6;
    let C = 7;
    let D = 8;
    let DIFERENCA = ((A * B) - (C * D));
    console.log(`DIFERENCA = ${DIFERENCA}`);
}
  
// Cálculo de salário
function exercicio1008() {
    let numeroFuncionario = 25;
    let horasTrabalhadas = 100;
    let valorHora = 5.50;
    let calculoSalario = horasTrabalhadas * valorHora;
    console.log(`NUMBER = ${numeroFuncionario}`);
    console.log(`SALARY = U$ ${calculoSalario.toFixed(2)}`);
}
  
// Salário com comissão
function exercicio1009() {
    let nome = "JOAO";
    let salario = 500.00;
    let vendas = 1230.30;
    let comissao = (vendas * 0.15);
    let total = comissao + salario;
    console.log(`TOTAL = R$ ${total.toFixed(2)}`);
}
  
// Valor a pagar por duas peças
function exercicio1010() {
    let unitario1 = 1;
    let valor1 = 5.30;
  
    let unitario2 = 2;
    let valor2 = 5.10;
  
    let total = (unitario1 * valor1) + (unitario2 * valor2);
    console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
}
  
// Quantidade de LEDs necessários
function exercicio1168() {
    let N = 3;
    const leds = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
    let numeros = ["115380", "2819311", "23456"];
  
    for (let valor of numeros) {
      let total = 0;
      for (let digito of valor) {
        total += leds[parseInt(digito)];
      }
      console.log(`${total} leds`);
    }
}
  
// Figurinhas faltantes
function exercicio2779() {
    let total = 10;
    let pacote = 3;
    let figurinhas = [5, 7, 10];
  
    let nova = new Set(figurinhas);
    let faltam = total - nova.size;
    console.log(faltam);
}
  
// Placas que cabem na empresa
function exercicio2770() {
    let X = 10; // altura da placa da empresa
    let Y = 15; // largura da placa da empresa
    let P = 3;  // quantas placas
    let placas = [
        [9, 14],
        [15, 10],
        [11, 20]
    ];
  
    for (let [Xi, Yi] of placas) {
        if ((Xi <= X && Yi <= Y) || (Xi <= Y && Yi <= X)) {
          console.log("Sim");
        } else {
          console.log("Nao");
        }
    }
}
  
// Separação de pares e ímpares
function exercicio1179() {
    let numeros = [1,3,5,7,9,2,4,6,8,10,11,13,15,17,19];
    let par = [];
    let impar = [];
  
    for (let num of numeros) {
      if (num % 2 === 0) {
        par.push(num);
        if (par.length === 5) {
          for (let j = 0; j < 5; j++) {
            console.log(`par[${j}] = ${par[j]}`);
          }
          par = [];
        }
      } else {
        impar.push(num);
        if (impar.length === 5) {
          for (let j = 0; j < 5; j++) {
            console.log(`impar[${j}] = ${impar[j]}`);
          }
          impar = [];
        }
      }
    }
  
    for (let i = 0; i < impar.length; i++) {
      console.log(`impar[${i}] = ${impar[i]}`);
    }
  
    for (let i = 0; i < par.length; i++) {
      console.log(`par[${i}] = ${par[i]}`);
    }
}
