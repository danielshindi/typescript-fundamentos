type Usuario = {
  id: number;
  nome: string;
  email: string;
  ativo: boolean;
};

type Produto = {
  id: number;
  nome: string;
  preco: number;
};

const usuario: Usuario = {
  id: 1,
  nome: "Ana",
  email: "ana@email.com",
  ativo: true
};

const produtos: Produto[] = [
  { id: 1, nome: "Mouse", preco: 80 },
  { id: 2, nome: "Teclado", preco: 200 },
  { id: 3, nome: "Monitor", preco: 900 }
];

const exibirUsuario = (usuario: Usuario): void => {
  console.log(`Usuário: ${usuario.nome} - Email: ${usuario.email}`);
};

const calcularTotal = (valores: number[]): number => {
  return valores.reduce((acumulador, valor) => acumulador + valor, 0);
};

const buscarProdutoPorId = (lista: Produto[], id: number): Produto | string => {
  const produto = lista.find(produto => produto.id === id);
  return produto ? produto : "Produto não encontrado";
};

const nomesProdutos: string[] = produtos.map(produto => produto.nome);
const precos: number[] = produtos.map(produto => produto.preco);

exibirUsuario(usuario);
console.log("Nomes:", nomesProdutos);
console.log("Total dos preços:", calcularTotal(precos));
console.log("Busca 2:", buscarProdutoPorId(produtos, 2));
console.log("Busca 10:", buscarProdutoPorId(produtos, 10));


