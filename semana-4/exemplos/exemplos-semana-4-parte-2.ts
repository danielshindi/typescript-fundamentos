type Usuario = {
  readonly id: number;
  nome: string;
  email?: string;
};

const usuario1: Usuario = {
  id: 1,
  nome: "Daniel"
};

const usuario2: Usuario = {
  id: 2,
  nome: "Ana",
  email: "ana@email.com"
};

const exibirUsuario = (usuario: Usuario): void => {
  console.log(`ID: ${usuario.id}`);
  console.log(`Nome: ${usuario.nome}`);

  if (usuario.email) {
    console.log(`Email: ${usuario.email}`);
    return;
  }

  console.log("Email não cadastrado.");
};

exibirUsuario(usuario1);
exibirUsuario(usuario2);

const saudarPessoa = (nome: string, sobrenome?: string): void => {
  if (sobrenome) {
    console.log(`Olá, ${nome} ${sobrenome}`);
    return;
  }

  console.log(`Olá, ${nome}`);
};

saudarPessoa("Daniel");
saudarPessoa("Daniel", "Santana");

type StatusPedido = "pendente" | "pago" | "cancelado";

const atualizarStatus = (status: StatusPedido): void => {
  console.log(`Novo status: ${status}`);
};

atualizarStatus("pendente");
atualizarStatus("pago");

interface Curso {
  id: number;
  titulo: string;
  cargaHoraria?: number;
}

const curso1: Curso = {
  id: 1,
  titulo: "React"
};

const curso2: Curso = {
  id: 2,
  titulo: "TypeScript",
  cargaHoraria: 20
};

console.log(curso1);
console.log(curso2);