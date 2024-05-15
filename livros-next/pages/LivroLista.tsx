import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'; // Importando os estilos
import { LinhaLivro } from '../componentes/LinhaLivro'; // Importando o componente LinhaLivro
import Livro from '../classes/modelo/Livro'; // Certifique-se de importar o tipo Livro adequado
import { Router } from 'next/router';


const LivroLista: React.FC = () => {
  const baseURL = 'http://localhost:3000/api/livros';
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  // Função para obter os livros
  const obter = async () => {
    try {
      const response = await fetch(baseURL);
      const data = await response.json();
      setLivros(data);
      setCarregado(true);
    } catch (error) {
      console.error('Erro ao obter livros:', error);
    }
  };

  useEffect(() => {
    obter(); // Chamando a função de obter ao carregar o componente
  }, []);

  // Função para excluir um livro
  const excluirLivro = async (codigo: number) => {
    try {
      const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
      const data = await response.json();
      if (data.ok) {
        setCarregado(false); // Força o redesenho da página
      } else {
        console.error('Erro ao excluir livro:', data.error);
      }
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
    }
  };

  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
      <h1>Lista de Livros</h1>

      {/* Tabela de livros */}
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluirLivro(livro.codigo)} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LivroLista;
