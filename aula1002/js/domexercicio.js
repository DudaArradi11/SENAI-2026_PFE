const corpo = document.getElementById('corpo');
const titulo = document.getElementById('titulo');
const texto = document.querySelector('.texto');//seletor generico
const container= document.querySelector('.container');

corpo.style.backgroundColor = '#fdf44bfe';
titulo.style.color = '#000000';
titulo.style.fontSize = '45px';
titulo.textContent += ' - Duda 🐈';
texto.textContent +=  '- Esse é escrito em JS';
texto.style.fontSize = '20px';
texto.style.color = '#000000';