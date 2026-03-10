const corpo = document.querySelector('body')
const titulo = document.querySelector('.titulo')
const paragrafo = document.querySelector('#texto')
const container = document.querySelector('#container')

corpo.style.backgroundColor = '#e519ab';
corpo.style.color = 'white';

titulo.textContent = 'Manipulando o Dom de novo! '

let subtitulo = '<h2>Manipular o Dom é fácil!</h2>';
container.innerHTML = subtitulo;
