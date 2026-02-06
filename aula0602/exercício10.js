const prompt = require('prompt-sync')();
let nomeCompleto = prompt("Digite seu nome completo:");

console.log("Maiúsculas:", nomeCompleto.toUpperCase());
console.log("Minúsculas:", nomeCompleto.toLowerCase());