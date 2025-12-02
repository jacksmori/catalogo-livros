import { useEffect, useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { api } from '../services/api';
import type { Livro } from '../types';
import { Card } from '../components/Card';
import { Form } from '../components/Form';

export const List = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [filteredLivros, setFilteredLivros] = useState<Livro[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingLivro, setEditingLivro] = useState<Livro | undefined>();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGenero, setFilterGenero] = useState('');
  const [filterLido, setFilterLido] = useState<'all' | 'lido' | 'nao-lido'>('all');

  useEffect(() => {
    loadLivros();
  }, []);

  useEffect(() => {
    filterLivros();
  }, [livros, searchTerm, filterGenero, filterLido]);

  const loadLivros = async () => {
    try {
      setLoading(true);
      const data = await api.getLivros();
      setLivros(data);
    } catch (error) {
      console.error('Erro ao carregar livros:', error);
      alert('Erro ao carregar livros. Verifique se o JSON Server está rodando.');
    } finally {
      setLoading(false);
    }
  };

  const filterLivros = () => {
    let filtered = [...livros];

    // Filtro de busca
    if (searchTerm) {
      filtered = filtered.filter(
        (livro) =>
          livro.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          livro.autor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro de gênero
    if (filterGenero) {
      filtered = filtered.filter((livro) => livro.genero === filterGenero);
    }

    // Filtro de lido
    if (filterLido === 'lido') {
      filtered = filtered.filter((livro) => livro.lido);
    } else if (filterLido === 'nao-lido') {
      filtered = filtered.filter((livro) => !livro.lido);
    }

    setFilteredLivros(filtered);
  };

  const handleSubmit = async (livro: Livro) => {
    try {
      if (editingLivro?.id) {
        await api.updateLivro(editingLivro.id, livro);
      } else {
        await api.createLivro(livro);
      }
      await loadLivros();
      setShowForm(false);
      setEditingLivro(undefined);
    } catch (error) {
      console.error('Erro ao salvar livro:', error);
      alert('Erro ao salvar livro');
    }
  };

  const handleEdit = (livro: Livro) => {
    setEditingLivro(livro);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Tem certeza que deseja excluir este livro?')) return;

    try {
      await api.deleteLivro(id);
      await loadLivros();
    } catch (error) {
      console.error('Erro ao deletar livro:', error);
      alert('Erro ao deletar livro');
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingLivro(undefined);
  };

  const generos = Array.from(new Set(livros.map((l) => l.genero)));

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Minha Biblioteca
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {filteredLivros.length} {filteredLivros.length === 1 ? 'livro' : 'livros'} encontrado
            {filteredLivros.length !== 1 ? 's' : ''}
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Adicionar Livro
        </button>
      </div>

      {/* Filtros */}
      <div className="card mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Busca */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por título ou autor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>

          {/* Filtro de Gênero */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={filterGenero}
              onChange={(e) => setFilterGenero(e.target.value)}
              className="input-field pl-10"
            >
              <option value="">Todos os gêneros</option>
              {generos.map((genero) => (
                <option key={genero} value={genero}>
                  {genero}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro de Status */}
          <select
            value={filterLido}
            onChange={(e) => setFilterLido(e.target.value as any)}
            className="input-field"
          >
            <option value="all">Todos os livros</option>
            <option value="lido">Já lidos</option>
            <option value="nao-lido">Para ler</option>
          </select>
        </div>
      </div>

      {/* Grid de Livros */}
      {filteredLivros.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
            Nenhum livro encontrado
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setFilterGenero('');
              setFilterLido('all');
            }}
            className="btn-secondary"
          >
            Limpar Filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLivros.map((livro) => (
            <Card
              key={livro.id}
              livro={livro}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Form Modal */}
      {showForm && (
        <Form
          livro={editingLivro}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};