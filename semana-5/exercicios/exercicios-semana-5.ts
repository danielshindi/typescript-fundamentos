// 1. Crie uma interface chamada "Cliente" com:
// - id: number
// - nome: string
// - email?: string
interface Cliente {
    id: number;
    nome: string;
    email?: string;
}

// 2. Crie um array com 3 clientes.
const clientes: Cliente[] = [
    { id: 1, nome: 'Carlos' },
    { id: 2, nome: 'Adriane', email: 'adriane@email.com' },
    { id: 3, nome: 'Roberto' }
];

// 3. Crie uma função chamada "exibirCliente"
// usando destructuring no parâmetro.
// Ela deve mostrar:
// id, nome e email
// se não houver email, mostrar "Email não informado".
const exibirCliente = ({id, nome, email}: Cliente): void => {
    console.log(`ID: ${id} - Nome: ${nome} - E-mail: ${email ?? "Email não informado"}`);
};

clientes.forEach(cliente => exibirCliente(cliente));

// 4. Crie um type chamado "Nivel"
// que aceite apenas:
// "junior" | "pleno" | "senior"
type Nivel = 'junior' | 'pleno' | 'senior';

// 5. Crie uma interface chamada "Desenvolvedor" com:
// - id: number
// - nome: string
// - nivel: Nivel
interface Desenvolvedor {
    id: number;
    nome: string;
    nivel: Nivel;
}

// 6. Crie uma função chamada "executarParaCadaDev"
// que receba:
// - um array de Desenvolvedor[]
// - um callback do tipo (dev: Desenvolvedor) => void
// A função deve executar o callback para cada desenvolvedor.
const executarParaCadaDev = (
  desenvolvedores: Desenvolvedor[],
  callback: (dev: Desenvolvedor) => void
): void => {
  desenvolvedores.forEach(callback);
};

// 7. Crie uma função chamada "formatarDado"
// que receba um valor do tipo unknown e:
// - se for string, retorne em maiúsculas
// - se for number, retorne "Número: [valor]"
// - se for boolean, retorne "Sim" ou "Não"
// - senão, retorne "Tipo inválido"
const formatarDado = (valor: unknown): string => {
    if (typeof valor === 'string') {
        return valor.toUpperCase();
    }
    if (typeof valor === 'number') {
        return `Número: ${valor}`;
    }
    if (typeof valor === 'boolean') {
        return valor ? 'Sim' : 'Não';
    }
    return 'Tipo inválido';
};

// 8. Crie um enum chamado "Setor"
// com os valores:
// "frontend", "backend", "dados"
enum Setor {
    Frontend = 'frontend',
    Backend = 'backend',
    Dados = 'dados'
}

// 9. Crie uma interface chamada "FuncionarioEmpresa" com:
// - id: number
// - nome: string
// - setor: Setor
interface FuncionarioEmpresa {
    id: number;
    nome: string;
    setor: Setor;
}

// 10. Crie 2 objetos do tipo FuncionarioEmpresa.
const obj1: FuncionarioEmpresa = {
    id: 1,
    nome: 'Adalberto',
    setor: Setor.Backend
}

const obj2: FuncionarioEmpresa = {
    id: 2,
    nome: 'Alana',
    setor: Setor.Dados
}