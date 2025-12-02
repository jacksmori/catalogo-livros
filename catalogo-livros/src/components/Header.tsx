import { Link } from 'react-router-dom';
import { BookOpen, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary-600 p-2 rounded-lg group-hover:bg-primary-700 transition-colors">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Minha Biblioteca
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Catálogo Pessoal de Livros
              </p>
            </div>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            >
              Início
            </Link>
            <Link
              to="/livros"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            >
              Meus Livros
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};