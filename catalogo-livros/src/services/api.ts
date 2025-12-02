import type { Livro } from '../types';

const API_URL = 'http://localhost:3000/livros';

export const api = {
  // GET - Listar todos os livros
  getLivros: async (): Promise<Livro[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Erro ao buscar livros');
    return response.json();
  },

  // GET - Buscar livro por ID
  getLivroById: async (id: number): Promise<Livro> => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error('Erro ao buscar livro');
    return response.json();
  },

  // POST - Criar novo livro
  createLivro: async (livro: Omit<Livro, 'id'>): Promise<Livro> => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livro),
    });
    if (!response.ok) throw new Error('Erro ao criar livro');
    return response.json();
  },

  // PUT - Atualizar livro
  updateLivro: async (id: number, livro: Livro): Promise<Livro> => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livro),
    });
    if (!response.ok) throw new Error('Erro ao atualizar livro');
    return response.json();
  },

  // DELETE - Remover livro
  deleteLivro: async (id: number): Promise<void> => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Erro ao deletar livro');
  },
};