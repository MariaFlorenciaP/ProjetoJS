const livros = require('./database')


//pegar o input usando a dependencia readline sync

const readline = require('readline-sync')///consigo usar tudo o que a biblioteca disponibiliza a traves da palavra readline

const entradaInicial = readline.question('Deseja buscar um livro? S/N')

//Se sim a gente mostra as categorias disponiveis e pergunta qual categoria quer
//Se nao, a gente mostra todos os livros em ordem crescente pela quantidade de paginas

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis: ')
    console.log('Produtividade e estilo de vida', '/Historia Brasilera', '/Américas', '/Tecnologia', '/Estilo de vida')

    const entradaCategoria = readline.question('Qual categoria voê escolhe?')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)

}else{
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis')
    console.table(livrosOrdenados)
}