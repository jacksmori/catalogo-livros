# Catálogo de Livros - Minha Biblioteca

Aplicação web completa para gerenciar um catálogo pessoal de livros, desenvolvida com React, TypeScript, Tailwind CSS e JSON Server.

## Sobre o Projeto

Este projeto foi desenvolvido como trabalho avaliativo da disciplina de Frameworks Front-End da Uninassau Natal/RN. A aplicação permite cadastrar, visualizar, editar e excluir livros de uma biblioteca pessoal, com todas as operações CRUD sendo persistidas em um banco de dados local via JSON Server.

## Funcionalidades

- ✅ **Listagem de Livros**: Visualize todos os livros cadastrados em cards elegantes
- ✅ **Busca Inteligente**: Pesquise por título, autor ou gênero
- ✅ **Adicionar Livros**: Cadastre novos livros com título, autor, ano, gênero, capa, descrição e avaliação
- ✅ **Editar Livros**: Atualize as informações de livros existentes
- ✅ **Excluir Livros**: Remove livros do catálogo com confirmação
- ✅ **Avaliação com Estrelas**: Sistema de avaliação de 1 a 5 estrelas
- ✅ **Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- ✅ **Validação de Formulários**: Todos os campos são validados antes do envio

## Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utility-first
- **React Router DOM** - Navegação entre páginas
- **JSON Server** - API REST fake para desenvolvimento
- **Fetch API** - Requisições HTTP nativas

## Estrutura do Projeto

```
catalogo-livros/
├── src/
│   ├── components/
│   │   ├── Card.tsx          # Card de exibição de livro
│   │   ├── Form.tsx          # Formulário reutilizável
│   │   └── Header.tsx        # Cabeçalho da aplicação
│   ├── pages/
│   │   ├── Home.tsx          # Página principal com listagem
│   │   ├── AddLivro.tsx      # Página de adição
│   │   └── EditLivro.tsx     # Página de edição
│   ├── services/
│   │   └── api.ts            # Funções de API (CRUD)
│   ├── App.tsx               # Componente principal com rotas
│   ├── main.tsx              # Ponto de entrada
│   └── index.css             # Estilos globais + Tailwind
├── db.json                   # Banco de dados JSON Server
├── tailwind.config.js        # Configuração do Tailwind
├── package.json              # Dependências e scripts
└── README.md                 # Documentação do projeto
```

## Instalação e Configuração

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/catalogo-livros.git
cd catalogo-livros
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o Tailwind CSS**

Certifique-se de que os arquivos `tailwind.config.js` e `postcss.config.js` estão configurados corretamente.

4. **Inicie o JSON Server** (em um terminal)
```bash
npm run server
```
O servidor rodará em: `http://localhost:3000`

5. **Inicie a aplicação React** (em outro terminal)
```bash
npm run dev
```
A aplicação rodará em: `http://localhost:5173`

### Script Alternativo (Ambos Juntos)

Para facilitar, você pode instalar o `concurrently` e rodar ambos simultaneamente:

```bash
npm install -D concurrently
npm start
```

## Como Usar

### Visualizar Livros
1. Acesse a página inicial
2. Todos os livros cadastrados aparecerão em cards
3. Use a barra de busca para filtrar por título, autor ou gênero

### Adicionar um Livro
1. Clique no botão "+ Adicionar Livro" no cabeçalho
2. Preencha todos os campos obrigatórios:
   - Título
   - Autor
   - Ano de Publicação
   - Gênero
   - URL da Capa (link de imagem)
   - Descrição
   - Avaliação (1-5 estrelas)
3. Clique em "Adicionar Livro"

### Editar um Livro
1. Na página inicial, clique no botão "Editar" do card do livro
2. Modifique os campos desejados
3. Clique em "Salvar Alterações"

### Excluir um Livro
1. Na página inicial, clique no botão "Excluir" do card do livro
2. Confirme a exclusão na janela de confirmação

## Design e Interface

A interface foi desenvolvida com foco em:
- **Usabilidade**: Navegação intuitiva e clara
- **Acessibilidade**: Contraste adequado e elementos semânticos
- **Responsividade**: Adaptação para todos os tamanhos de tela
- **Feedback Visual**: Animações e estados de hover
- **Cores**: Paleta profissional com roxo primário e verde secundário

## API Endpoints

O JSON Server fornece os seguintes endpoints:

- `GET /livros` - Lista todos os livros
- `GET /livros/:id` - Busca um livro por ID
- `POST /livros` - Cria um novo livro
- `PATCH /livros/:id` - Atualiza um livro parcialmente
- `PUT /livros/:id` - Atualiza um livro completamente
- `DELETE /livros/:id` - Deleta um livro

## Testando a Aplicação

1. Inicie o JSON Server e a aplicação
2. Teste a listagem: os 3 livros de exemplo devem aparecer
3. Teste a busca: digite "1984" e veja o filtro funcionando
4. Teste adicionar: cadastre um novo livro
5. Teste editar: modifique algum livro existente
6. Teste excluir: remova um livro e confirme a exclusão

## Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## Vídeo de Demonstração

[[Link do vídeo demonstrativo no Google Drive](https://drive.google.com/drive/folders/1m1uyn6zWUGlZRyBojf1uLAGmKs9x3Om8?usp=drive_link)]

*Duração: 04:04*
*Conteúdo: Demonstração de todas as funcionalidades CRUD*

## Autor

**[Seu Nome]**
- GitHub: [@jacksmori](https://github.com/jacksmori)
- Email: morientejackson15@gmail.com

## Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso de Front-End e Frameworks da Uninassau Natal/RN.

## Agradecimentos

- Professor Renato Freire pela orientação
- Uninassau Natal/RN
- Comunidade React e Tailwind CSS

---

**Desenvolvido com muito café para a disciplina de Front-End e Frameworks**