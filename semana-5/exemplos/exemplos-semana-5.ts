interface Usuario {
  id: number;
  nome: string;
  email?: string;
}

type Perfil = "admin" | "editor" | "leitor";

interface UsuarioSistema {
  id: number;
  nome: string;
  perfil: Perfil;
  ativo: boolean;
}

const usuarios: UsuarioSistema[] = [
  { id: 1, nome: "Daniel", perfil: "admin", ativo: true },
  { id: 2, nome: "Carla", perfil: "editor", ativo: true },
  { id: 3, nome: "Roberta", perfil: "leitor", ativo: false }
];

const executarParaCadaUsuario = (
  lista: UsuarioSistema[],
  callback: (usuario: UsuarioSistema) => void
): void => {
  lista.forEach(callback);
};

executarParaCadaUsuario(usuarios, (usuario) => {
  console.log(`${usuario.nome} - ${usuario.perfil}`);
});

const exibirUsuario = ({ id, nome, perfil, ativo }: UsuarioSistema): void => {
  console.log(`${id} - ${nome} - ${perfil} - ${ativo ? "ativo" : "inativo"}`);
};

usuarios.forEach(exibirUsuario);

const formatarEntrada = (valor: unknown): string => {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }

  if (typeof valor === "number") {
    return `Número recebido: ${valor}`;
  }

  if (typeof valor === "boolean") {
    return valor ? "Verdadeiro" : "Falso";
  }

  return "Tipo não suportado";
};

console.log(formatarEntrada("daniel"));
console.log(formatarEntrada(42));
console.log(formatarEntrada(true));

enum Prioridade {
  Baixa = "baixa",
  Media = "media",
  Alta = "alta"
}

interface Chamado {
  id: number;
  titulo: string;
  prioridade: Prioridade;
}

const chamado: Chamado = {
  id: 1,
  titulo: "Erro no login",
  prioridade: Prioridade.Alta
};

console.log(chamado);