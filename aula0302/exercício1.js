let prompt = require('prompt-sync')();

 let numer1 = Number(prompt('Digite um número: '));
 let numer2 = Number(prompt('Digite outro número: '));

let soma = numer1+numer2;
let subtracao = numer1-numer2;
let divisao =numer1/numer2;
let multiplicacao= numer1*numer2;


console.log('A SOMA dos números é: ' + soma);
console.log('A SUBTRAÇÃO dos números é: ' + subtracao);
console.log('A DIVIÃO dos números é: ' + divisao);
console.log('A MULTPLICAÇÃO dos números é: ' + multiplicacao);