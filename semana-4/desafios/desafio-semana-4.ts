// Crie um pequeno sistema de cadastro de livros.
type Livro = {
    id: number;
    titulo: string;
    autor: string;
    ano: number;
    disponivel: boolean;
};

let livros: Livro[] = [
    { id: 1, titulo: "Livro 1", autor: "Autor 1", ano: 1999, disponivel: true},
    { id: 2, titulo: "Livro 2", autor: "Autor 2", ano: 2001, disponivel: false},
    { id: 3, titulo: "Livro 3", autor: "Autor 3", ano: 1998, disponivel: true}
];

const listarLivros = (): void => {
    livros.forEach(livro => console.log(`${livro.id} - ${livro.titulo} (${livro.autor})`));
};

const buscarLivroPorId = (id: number): Livro | undefined => {
    const livro = livros.find(livro => livro.id === id);
    if (!livro) {
        console.log("Livro não encontrado.");
        return undefined;
    }
    return livro;
};

const adicionarLivro = (livro: Livro): void => {
    if (livros.some(livroDaLista => livroDaLista.id === livro.id)) {
        console.log(`Já existe livro com id ${livro.id} cadastrado.`);
        return;
    }
    livros = [...livros, livro];
    console.log("Livro adicionado com sucesso.");
};

const marcarComoEmprestado = (id: number): void => {
  const livroEncontrado = livros.find((livro) => livro.id === id);

  if (!livroEncontrado) {
    console.log("Livro não encontrado.");
    return;
  }

  if (!livroEncontrado.disponivel) {
    console.log("O livro já está emprestado.");
    return;
  }

  livros = livros.map((livro) => {
    if (livro.id === id) {
      return { ...livro, disponivel: false };
    }

    return livro;
  });

  console.log(`Livro de id ${id} marcado como emprestado.`);
};


listarLivros();

adicionarLivro({ id: 4, titulo: "Livro A", autor: "Autor A", ano: 1890, disponivel: true});

listarLivros();

marcarComoEmprestado(4);
listarLivros();


const removerLivro = (id: number): void => {
    const tamanhoAnterior = livros.length;
    livros = livros.filter(livro => livro.id !== id);
    if (livros.length === tamanhoAnterior) {
        console.log(`Livro de id ${id} não encontrado.`);
        return;
    }
    console.log(`Livro de id ${id} removido com sucesso.`);
};

removerLivro(5);
removerLivro(3);
listarLivros();

const listarLivrosDisponiveis = (): void => {
    const livrosDisponiveis = livros.filter(livro => livro.disponivel);
    if (livrosDisponiveis.length === 0) {
        console.log("Nenhum livro disponível.");
        return;
    }
    console.log("Livros disponíveis: ");
    livrosDisponiveis.forEach(livro => console.log(`${livro.id} - ${livro.titulo} (${livro.autor})`));
};

listarLivrosDisponiveis();


const listarLivrosEmprestados = (): void => {
    const livrosEmprestados = livros.filter(livro => !livro.disponivel);
    if (livrosEmprestados.length === 0) {
        console.log("Nenhum livro emprestado.");
        return;
    }
    console.log("Livros emprestados: ");
    livrosEmprestados.forEach(livro => console.log(`${livro.id} - ${livro.titulo} (${livro.autor})`));
};

listarLivrosEmprestados();


const atualizarTitulo = (id: number, novoTitulo: string): void => {
    const livroEncontrado = livros.find((livro) => livro.id === id);

    if (!livroEncontrado) {
        console.log("Livro não encontrado.");
        return;
    }

    livros = livros.map(livro => {
        if (livro.id === id) {
            return { ...livro, titulo: novoTitulo };
        } else {
            return livro;
        }
    });
  console.log(`Título do livro de id ${id} alterado para ${novoTitulo}.`);
};

atualizarTitulo(5, 'Libro B');
atualizarTitulo(4, 'Libro B');
listarLivros();