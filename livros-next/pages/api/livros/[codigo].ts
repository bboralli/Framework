import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivro from '../../../classes/controle/ControleLivros'; // Importe novamente, se necessário

const controleLivro = new ControleLivro();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'DELETE') {
      const { codigo } = req.query;
      controleLivro.excluir(Number(codigo));
      res.status(200).json({ message: 'Livro excluído com sucesso!' });
    } else {
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
