import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Plus, TrendingUp, Star } from 'lucide-react';
import { api } from '../services/api';
import type { Livro } from '../types';

export const Home = () => {
  const [stats, setStats] = useState({
    total: 0,
    lidos: 0,
    paraLer: 0,
    totalPaginas: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const livros = await api.getLivros();
      setStats({
        total: livros.length,
        lidos: livros.filter((l: Livro) => l.lido).length,
        paraLer: livros.filter((l: Livro) => !l.lido).length,
        totalPaginas: livros.reduce((acc: number, l: Livro) => acc + l.paginas, 0),
      });
    } catch (error) {
      console.error('Erro ao carregar estatísticas:', error);
    }
  };

  const StatCard = ({ icon: Icon, title, value, color }: any) => (
    <div className={`card ${color}`}>
      <div className="flex items-center gap-4">
        <div className={`p-4 rounded-full bg-gradient-to-br ${color}`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
            {title}
          </p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {value}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Bem-vindo à Sua Biblioteca Digital
          </h1>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Organize, acompanhe e gerencie sua coleção pessoal de livros e seu processo de leitura de forma simples e eficiente.
          </p>
          <Link to="/livros" className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
            <BookOpen className="w-5 h-5" />
            Ver Minha Biblioteca
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={BookOpen}
            title="Total de Livros"
            value={stats.total}
            color="from-blue-500 to-blue-600"
          />
          <StatCard
            icon={Star}
            title="Livros Lidos"
            value={stats.lidos}
            color="from-green-500 to-green-600"
          />
          <StatCard
            icon={TrendingUp}
            title="Para Ler"
            value={stats.paraLer}
            color="from-orange-500 to-orange-600"
          />
          <StatCard
            icon={BookOpen}
            title="Total de Páginas"
            value={stats.totalPaginas.toLocaleString()}
            color="from-purple-500 to-purple-600"
          />
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card text-center">
            <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Adicione Livros
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Cadastre facilmente novos livros com todas as informações importantes.
            </p>
          </div>

          <div className="card text-center">
            <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Avalie e Organize
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Dê notas, marque como lido e organize por gêneros.
            </p>
          </div>

          <div className="card text-center">
            <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Acompanhe Progresso
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Veja suas estatísticas de leitura e progresso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};