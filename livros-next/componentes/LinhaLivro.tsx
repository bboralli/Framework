import React from 'react';
import Livro from '../classes/modelo/Livro'; // Certifique-se de importar o tipo Livro adequado
import ControleEditora from '../classes/controle/ControleEditora';

// Iniciar com a definição de uma instância de ControleEditora
const controleEditora = new ControleEditora(); // Supondo que você tenha a classe ControleEditora

// Definir a interface LinhaLivroProps
interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

// Definir o componente exportável LinhaLivro
export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.autores}</td>
      <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
      <td>
        <button onClick={excluir}>Excluir</button>
      </td>
    </tr>
  );
};
