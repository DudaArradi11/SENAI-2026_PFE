const prompt = require('prompt-sync')();
let anoNascimento = Number(prompt("Informe seu ano de nascimento:"));
let dataAtual = new Date();

let idade = dataAtual.getFullYear() - anoNascimento;
console.log("Idade:", idade);