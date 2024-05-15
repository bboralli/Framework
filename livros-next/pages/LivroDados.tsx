import React, { useState } from 'react';
import styles from '../styles/Home.module.css'; // Importando os estilos
import ControleEditora from '../classes/controle/ControleEditora'; // Importe o controlador de editoras adequado
import Livro from '../classes/modelo/Livro'; // Certifique-se de importar o tipo Livro adequado

const LivroDados: React.FC = () => {
  const controleEditora = new ControleEditora(); // Instanciando o controlador de editoras
  const baseURL = 'http://localhost:3000/api/livros';
  const [titulo, setTitulo] = useState<string>('');
  const [resumo, setResumo] = useState<string>('');
  const [autores, setAutores] = useState<string>('');
  const [codEditora, setCodEditora] = useState<number>(0);
  const [opcoes, setOpcoes] = useState<Array<{ value: number; text: string }>>([]);

  // Função para incluir um livro
  const incluirLivro = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const livro: Livro = {
      codigo: 0,
      titulo: titulo,
      resumo: resumo,
      autores: autores.split('\n'),
      codEditora: codEditora,
    };

    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(livro),
      });
      const data = await response.json();
      if (data.ok) {
        // Redirecionar para a página de lista de livros
        Router.push('/LivroLista');
      } else {
        console.error('Erro ao incluir livro:', data.error);
      }
    } catch (error) {
      console.error('Erro ao incluir livro:', error);
    }
  };

  // Função para tratar a mudança na seleção da editora
  const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(evento.target.value);
    setCodEditora(value);
  };

  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
      <h1>Adicionar Livro</h1>

      {/* Formulário de inclusão de livro */}
      <form onSubmit={incluirLivro}>
        <div>
          <label>Título:</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div>
          <label>Resumo:</label>
          <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} />
        </div>
        <div>
          <label>Autores:</label>
          <textarea value={autores} onChange={(e) => setAutores(e.target.value)} />
        </div>
        <div>
          <label>Editora:</label>
          <select value={codEditora} onChange={tratarCombo}>
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
            ))}
          </select>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
 
          )
        }