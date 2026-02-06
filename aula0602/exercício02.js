const prompt = require('prompt-sync')();
let idade = Number(prompt('Infome sua idade: '));
if(idade > 16 || idade > 18){
    console.log("Você esta autorizado pegar livros!")
} else{
    console.log("Você não poderá pegar livros!")
}