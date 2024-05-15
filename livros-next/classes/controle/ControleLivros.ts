import Livro from '../modelo/Livro';

const livros: Livro[] = [
    new Livro(1, 1, 'Livro 1', 'Resumo Livro 1', ['Autor 1', 'Autor 2']),
    new Livro(2, 2, 'Livro 2', 'Resumo Livro 2', ['Autor 3', 'Autor 4']),
    new Livro(3, 3, 'Livro 3', 'Resumo Livro 3', ['Autor 5', 'Autor 6'])
];

class ControleLivros {
    obterLivros() {
        return livros;
    }

    incluir(livro: Livro) {
        const novoCodigo = Math.max(...livros.map(livro => livro.codigo)) + 1;
        livro.codigo = novoCodigo;
        livros.push(livro);
    }

    excluir(codigoLivro: number) {
        const index = livros.findIndex(livro => livro.codigo === codigoLivro);
        if (index !== -1){
            livros.splice(index, 1);
        }
    }
}

export default ControleLivros;