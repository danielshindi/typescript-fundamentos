// 1. Crie um type chamado "Produto" com:
// - readonly id: number
// - nome: string
// - preco: number
// - descricao?: string
type Produto = {
    readonly id: number;
    nome: string;
    preco: number;
    descricao?: string;
};

// 2. Crie dois objetos do tipo Produto:
// - um sem descricao
// - outro com descricao
const produto1: Produto = {
    id: 1,
    nome: "Produto 1",
    preco: 100
};

const produto2: Produto = {
    id: 2,
    nome: "Produto 2",
    preco: 1000,
    descricao: "Descrição produto 2"
};

// 3. Crie uma função chamada "exibirProduto"
// que receba um Produto e mostre:
// id, nome, preco
// e, se existir, a descricao
const exibirProduto = (produto: Produto): void => {
    if (produto.descricao) {
        console.log(`ID: ${produto.id} - Nome: ${produto.nome} - Preço: ${produto.preco} - Descrição: ${produto.descricao}`);
        return;
    }

    console.log(`ID: ${produto.id} - Nome: ${produto.nome} - Preço: ${produto.preco}`);
};

exibirProduto(produto1);
console.log();
exibirProduto(produto2);

// 4. Crie uma função chamada "criarMensagem"
// que receba:
// - texto: string
// - autor?: string
// Se autor existir, exibir:
// "Mensagem de [autor]: [texto]"
// Senão, exibir:
// "Mensagem: [texto]"
const criarMensagem = (texto: string, autor?: string): void => {
    if (autor) {
        console.log(`Mensagem de ${autor}: ${texto}`);
        return;
    }
    console.log(`Mensagem: ${texto}`);
};

criarMensagem('bla bla bla', 'Daniel');
criarMensagem('bla bla bla');

// 5. Crie um type chamado "StatusTarefa"
// que só aceite:
// "pendente" | "em_andamento" | "concluida"
type StatusTarefa = "pendente" | "em_andamento" | "concluida";

// 6. Crie uma variável chamada "statusAtual"
// do tipo StatusTarefa e atribua um valor válido
const statusAtual: StatusTarefa = "pendente";

// 7. Crie uma interface chamada "Funcionario" com:
// - id: number
// - nome: string
// - cargo?: string
interface Funcionario {
    id: number;
    nome: string;
    cargo?: string;
}

// 8. Crie um array com 3 funcionários
const funcionarios: Funcionario[] = [
    { id: 1, nome: 'Daniel', cargo: 'Diretor' },
    { id: 2, nome: 'Jessica', cargo: 'Presidente' },
    { id: 3, nome: 'Julio' }
];

// 9. Crie uma função chamada "exibirFuncionario"
// que receba um Funcionario e mostre:
// nome e cargo
// se cargo não existir, mostrar "Cargo não informado"
const exibirFuncionario = (funcionario: Funcionario): void => {
    console.log(`Nome: ${funcionario.nome} - Cargo: ${funcionario.cargo ?? "Cargo não informado"}`);
};

funcionarios.forEach(funcionario => exibirFuncionario(funcionario));

// 10. Tente alterar um campo readonly de Produto
// e observe o erro do TypeScript

// produto1.id = 4;