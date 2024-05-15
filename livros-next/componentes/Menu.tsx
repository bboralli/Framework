import React from 'react';
import Link from 'next/link';

// Definir o componente Menu
export const Menu: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/LivroLista">
            <a>Lista de Livros</a>
          </Link>
        </li>
        <li>
          <Link href="/LivroDados">
            <a>Adicionar Livro</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
