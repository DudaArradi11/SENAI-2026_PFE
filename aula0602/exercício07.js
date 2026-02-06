const prompt = require('prompt-sync')();
let numeroDecimal = Number(prompt("Digite um número com casas decimais:"));

let arredondado = Math.round(numeroDecimal);
console.log("Número arredondado:", arredondado);