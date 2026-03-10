class Livro{
    titulo='O Deus que Destrói Sonhos';
    autor= 'Rodrigo Bibo';
    ano= 2021;
    editora = 'Thomas Nelson Brasil';
    paginas = 160;
    cor = 'Rosa';
    idioma = 'Português';
    publico = 'Jovens';

        abrir(){
        console.log("O livro foi aberto 📖");
    }

    ler(){
        console.log("Você começou a leitura.");
    }
}

const meuLivro = new Livro();
meuLivro.abrir();
meuLivro.ler();

//////////////////////////////////////////////////////////////////////////////////////
// OUTRA FORMA DESSE CÓDIGO:
//class Livro{
// titulo='O Deus que Destrói Sonhos';
//autor= 'Rodrigo Bibo';
//ano= 2021;
//editora = 'Thomas Nelson Brasil';
// paginas = 160;
// cor = 'Rosa';
//  idioma = 'Português';
// publico = 'Jovens';
//}

// const meuLivro = new Livro();
//console.log(meuLivro.titulo);
//console.log(meuLivro.autor);
//console.log(meuLivro.ano);
//console.log(meuLivro.editora);
//console.log(meuLivro.paginas);
//console.log(meuLivro.cor);
//console.log(meuLivro.idioma);
//console.log(meuLivro.publico);

////////////////////////////////////////////
//CORREÇÃO
//class Livro {
//titulo='Fazendo meu filme - Fani em busca de um final feliz';
//autor='Paula Pimenta';
//editora='Gutenberg';
//ano_de_publicacao=2012;
//capa='mole';
//numero_de_paginas=608;
//genero_literario='Romance';
//sinopse='Fani, nossa tão querida garotinha agora formada e morando em Los Angeles, vive um novo momento, mas mantém as marcas do amor por Leo. A narrativa alterna entre o presente da protagonista e o passado recente, explorando se o casal poderá superar a separaçã';
//}
//const impressao = new Livro();
//console.log(impressao);