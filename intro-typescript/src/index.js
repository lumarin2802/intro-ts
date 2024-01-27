"use strict";
//escreva o seu código aqui
//Exercicio 1
// function checaTriangulo(a:number, b:number, c:number):string {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }
//   const resultado = checaTriangulo(3, 3, 3);
// console.log(resultado);
Object.defineProperty(exports, "__esModule", { value: true });
//Exercicio 2
//   function imprimeTresCoresFavoritas() {
//     const cor1:string  = prompt("Insira sua primeira cor favorita")
//     const cor2:string  = prompt("Insira sua segunda cor favorita")
//     const cor3:string = prompt("Insira sua terceira cor favorita")
//     console.log([cor1, cor2, cor3])
//  }
//  imprimeTresCoresFavoritas();
//Exercicio 3
//  function checaAnoBissexto(ano:number):boolean {
//     const cond1:boolean = ano % 400 === 0
//     const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }
//  const anoExemplo: number = 2025;
//  const resultado: boolean = checaAnoBissexto(anoExemplo);
//  console.log(resultado);
//Exercicio 4
// function comparaDoisNumeros(num1:number, num2:number) {
//     let maiorNumero:number;
//     let menorNumero:number;
//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }
//     const diferenca:number = maiorNumero - menorNumero;
//     return diferenca 
//   }
//   const resultado = comparaDoisNumeros(8,5);
//   console.log(resultado);
//Exercicio 5
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
function checaRenovacaoRG() {
    var anoAtual = Number(prompt("Digite o ano atual"));
    var anoNascimento = Number(prompt("Digite o ano de nascimento"));
    var anoEmissao = Number(prompt("Digite o ano de emissão do documento"));
    var idade = anoAtual - anoNascimento;
    var tempoCarteira = anoAtual - anoEmissao;
    var cond1 = idade <= 20 && tempoCarteira >= 5;
    var cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10;
    var cond3 = idade > 50 && tempoCarteira >= 15;
    return (cond1 || cond2 || cond3);
}
var renovarRG = checaRenovacaoRG();
console.log(renovarRG);
