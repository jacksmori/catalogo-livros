import { useState, useEffect } from 'react';
import type { FormLivroProps } from '../types';
import { X, Save, Star } from 'lucide-react';

export const Form = ({ livro, onSubmit, onCancel }: FormLivroProps) => {
  const [formData, setFormData] = useState({
    titulo: '',
    autor: '',
    ano: new Date().getFullYear(),
    genero: '',
    paginas: 0,
    capa: '',
    sinopse: '',
    avaliacao: 0,
    lido: false,
  });

  useEffect(() => {
    if (livro) {
      setFormData(livro);
    }
  }, [livro]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'number'
          ? parseInt(value)
          : type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {livro?.id ? 'Editar Livro' : 'Novo Livro'}
          </h2>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Título */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Título *
            </label>
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Ex: 1984"
            />
          </div>

          {/* Autor */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Autor *
            </label>
            <input
              type="text"
              name="autor"
              value={formData.autor}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Ex: George Orwell"
            />
          </div>

          {/* Ano e Páginas */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Ano *
              </label>
              <input
                type="number"
                name="ano"
                value={formData.ano}
                onChange={handleChange}
                required
                min="1000"
                max={new Date().getFullYear()}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Páginas *
              </label>
              <input
                type="number"
                name="paginas"
                value={formData.paginas}
                onChange={handleChange}
                required
                min="1"
                className="input-field"
              />
            </div>
          </div>

          {/* Gênero */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Gênero *
            </label>
            <select
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="">Selecione um gênero</option>
              <option value="Ficção">Ficção</option>
              <option value="Ficção Científica">Ficção Científica</option>
              <option value="Fantasia">Fantasia</option>
              <option value="Romance">Romance</option>
              <option value="Mistério">Mistério</option>
              <option value="Thriller">Thriller</option>
              <option value="Terror">Terror</option>
              <option value="Biografia">Biografia</option>
              <option value="História">História</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Autoajuda">Autoajuda</option>
              <option value="Negócios">Negócios</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          {/* URL da Capa */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              URL da Capa *
            </label>
            <input
              type="url"
              name="capa"
              value={formData.capa}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="https://exemplo.com/capa.jpg"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Dica: Use Unsplash.com para imagens gratuitas
            </p>
          </div>

          {/* Sinopse */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Sinopse *
            </label>
            <textarea
              name="sinopse"
              value={formData.sinopse}
              onChange={handleChange}
              required
              rows={4}
              className="input-field resize-none"
              placeholder="Breve descrição do livro..."
            />
          </div>

          {/* Avaliação */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Avaliação (0-5)
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, avaliacao: star }))
                  }
                  className="p-2 hover:scale-110 transition-transform"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= formData.avaliacao
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Lido */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="lido"
              id="lido"
              checked={formData.lido}
              onChange={handleChange}
              className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
            <label
              htmlFor="lido"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 cursor-pointer"
            >
              Já li este livro
            </label>
          </div>

          {/* Botões */}
          <div className="flex gap-3 pt-4">
            <button type="submit" className="flex-1 btn-primary flex items-center justify-center gap-2">
              <Save className="w-5 h-5" />
              {livro?.id ? 'Atualizar' : 'Salvar'}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 btn-secondary"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};