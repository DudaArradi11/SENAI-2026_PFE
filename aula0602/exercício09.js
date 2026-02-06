const prompt = require('prompt-sync')();
let numero = Number(prompt("Digite um número:"));

let raiz = Math.sqrt(numero);
console.log("Raiz quadrada:", raiz);