const prompt = require('prompt-sync')();
let numeroUsuario = Number(prompt("Digite um número:"));
let numeroAleatorio = Math.round(Math.random() * 10);

console.log("Número aleatório:", numeroAleatorio);

if (numeroUsuario === numeroAleatorio) {
  console.log("Os números são iguais");
} else {
  console.log("Os números são diferentes");
}