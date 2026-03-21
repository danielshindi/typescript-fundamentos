// 1. Declare uma variável chamada "profissao" do tipo string
// e atribua o valor "Desenvolvedor".
const profissao: string = "Desenvolvedor";

// 2. Declare uma variável chamada "salario" do tipo number
// e atribua um valor numérico.
const salario: number = 7500;

// 3. Declare uma variável chamada "homeOffice" do tipo boolean.
const homeOffice: boolean = true;

// 4. Crie um array de strings chamado "tecnologias"
// com pelo menos 4 tecnologias que você conhece ou quer aprender.
const tecnologias: string[] = ["TypeScript", "HTML", "CSS", "React", "SQL", "Python"];

// 5. Crie um type chamado "Filme" com:
// - titulo: string
// - ano: number
// - disponivel: boolean
type Filme = {
    titulo: string;
    ano: number;
    disponivel: boolean;
};

// 6. Crie um objeto do tipo Filme.
const filme1: Filme = {
    titulo: "Título filme 1",
    ano: 1999,
    disponivel: true
};

// 7. Crie uma função chamada "multiplicar"
// que receba dois números e retorne o resultado da multiplicação.
const multiplicar = (a: number, b: number): number => a * b;
console.log(multiplicar(2,3));

// 8. Crie uma função chamada "saudar"
// que receba um nome e exiba no console: "Olá, [nome]"
// O retorno da função deve ser void.
const saudar = (nome: string): void => {
    console.log(`Olá, ${nome}`);
};
saudar("Daniel");

// 9. Crie uma variável chamada "resultado"
// que aceite string ou number.
let resultado: string | number = "123";
console.log(resultado);
resultado = 123;
console.log(resultado);

// 10. Crie um type chamado "Aluno" com:
// - nome: string
// - idade: number
// - matriculado: boolean
type Aluno = {
    nome: string;
    idade: number;
    matriculado: boolean;
};

// Depois crie um array com 3 alunos.
const alunos: Aluno[] = [
    {
        nome: 'Daniel',
        idade: 34,
        matriculado: true
    },
        {
        nome: 'Jessica',
        idade: 31,
        matriculado: false
    },
        {
        nome: 'Leticia',
        idade: 47,
        matriculado: true
    },
]

console.log(alunos);