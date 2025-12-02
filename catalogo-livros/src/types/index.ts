export interface Livro {
  id?: number;
  titulo: string;
  autor: string;
  ano: number;
  genero: string;
  paginas: number;
  capa: string;
  sinopse: string;
  avaliacao: number;
  lido: boolean;
}

export interface FormLivroProps {
  livro?: Livro;
  onSubmit: (livro: Livro) => Promise<void>;
  onCancel: () => void;
}