import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivro from '../../../classes/controle/ControleLivros'; // Supondo que você tenha uma classe ControleLivro em 'utils'

const controleLivro = new ControleLivro();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const livros = await controleLivro.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
      const { livro } = req.body;
      controleLivro.incluir(livro);
      res.status(200).json({ message: 'Livro incluído com sucesso!' });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
