import type { Livro } from '../types';
import { Edit, Trash2, Star, BookCheck, BookOpen } from 'lucide-react';

interface CardProps {
  livro: Livro;
  onEdit: (livro: Livro) => void;
  onDelete: (id: number) => void;
}

export const Card = ({ livro, onEdit, onDelete }: CardProps) => {
  return (
    <div className="card group">
      <div className="flex flex-col h-full">
        {/* Imagem da Capa */}
        <div className="relative overflow-hidden rounded-lg mb-4 h-64">
          <img
            src={livro.capa}
            alt={livro.titulo}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            {livro.lido ? (
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <BookCheck className="w-3 h-3" />
                Lido
              </span>
            ) : (
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                Ler
              </span>
            )}
          </div>
        </div>

        {/* Informações */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {livro.titulo}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            por <span className="font-semibold">{livro.autor}</span>
          </p>

          {/* Avaliação */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < livro.avaliacao
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
              {livro.avaliacao}/5
            </span>
          </div>

          {/* Gênero e Ano */}
          <div className="flex gap-2 mb-3">
            <span className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-xs font-semibold">
              {livro.genero}
            </span>
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
              {livro.ano}
            </span>
          </div>

          {/* Sinopse */}
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
            {livro.sinopse}
          </p>

          <p className="text-gray-500 dark:text-gray-500 text-xs mb-4">
            {livro.paginas} páginas
          </p>
        </div>

        {/* Botões de Ação */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onEdit(livro)}
            className="flex-1 btn-secondary flex items-center justify-center gap-2"
          >
            <Edit className="w-4 h-4" />
            Editar
          </button>
          <button
            onClick={() => livro.id && onDelete(livro.id)}
            className="btn-danger flex items-center justify-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};