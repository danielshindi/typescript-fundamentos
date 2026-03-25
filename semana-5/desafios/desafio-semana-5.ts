type StatusTarefa = "pendente" | "em_andamento" | "concluida";

interface Tarefa {
  readonly id: number;
  titulo: string;
  descricao?: string;
  status: StatusTarefa;
  responsavel: string;
}

let tarefas: Tarefa[] = [
  { id: 1, titulo: "Testar funções", status: "em_andamento", responsavel: "Daniel" },
  { id: 2, titulo: "Analisar dados", status: "em_andamento", responsavel: "Roberto" },
  {
    id: 3,
    titulo: "Implementar nova funcionalidade",
    descricao: "Descricao implementar nova funcionalidade",
    status: "pendente",
    responsavel: "Carlos"
  },
  {
    id: 4,
    titulo: "Levantar requisitos",
    descricao: "Descrição Levantar requisitos",
    status: "concluida",
    responsavel: "Julio"
  },
  { id: 5, titulo: "Teste unitário", status: "concluida", responsavel: "Camila" }
];

const listarTarefas = (): void => {
  if (tarefas.length === 0) {
    console.log("Lista de tarefas vazia.");
    return;
  }

  tarefas.forEach((tarefa) => {
    if (tarefa.descricao) {
      console.log(
        `ID: ${tarefa.id} - Título: ${tarefa.titulo} - Descrição: ${tarefa.descricao} - Status: ${tarefa.status} - Responsável: ${tarefa.responsavel}`
      );
      return;
    }

    console.log(
      `ID: ${tarefa.id} - Título: ${tarefa.titulo} - Status: ${tarefa.status} - Responsável: ${tarefa.responsavel}`
    );
  });
};

const buscarTarefaPorId = (id: number): Tarefa | undefined => {
  const tarefaBuscada = tarefas.find((tarefa) => tarefa.id === id);

  if (!tarefaBuscada) {
    console.log("Tarefa não encontrada.");
    return undefined;
  }

  return tarefaBuscada;
};

const adicionarTarefa = (tarefa: Tarefa): void => {
  const idJaExiste = tarefas.some((tarefaDaLista) => tarefaDaLista.id === tarefa.id);

  if (idJaExiste) {
    console.log(`Tarefa de ID ${tarefa.id} já existe.`);
    return;
  }

  tarefas = [...tarefas, tarefa];
  console.log("Tarefa adicionada com sucesso.");
};

const atualizarStatus = (id: number, novoStatus: StatusTarefa): void => {
  const tarefa = tarefas.find((tarefa) => tarefa.id === id);

  if (!tarefa) {
    console.log("Tarefa não encontrada.");
    return;
  }

  if (tarefa.status === novoStatus) {
    console.log("A tarefa já possui esse status.");
    return;
  }

  tarefas = tarefas.map((tarefa) => {
    if (tarefa.id === id) {
      return { ...tarefa, status: novoStatus };
    }

    return tarefa;
  });

  console.log("Tarefa atualizada com sucesso.");
};

const atualizarDescricao = (id: number, descricao?: string): void => {
  const tarefa = tarefas.find((tarefa) => tarefa.id === id);

  if (!tarefa) {
    console.log("Tarefa não encontrada.");
    return;
  }

  if (descricao === undefined) {
    tarefas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const { descricao: _descricao, ...tarefaSemDescricao } = tarefa;
        return tarefaSemDescricao;
      }

      return tarefa;
    });

    console.log(`Descrição da tarefa de id ${id} removida.`);
    return;
  }

  tarefas = tarefas.map((tarefa) => {
    if (tarefa.id === id) {
      return { ...tarefa, descricao };
    }

    return tarefa;
  });

  console.log(`Descrição da tarefa de id ${id} atualizada com sucesso.`);
};

const executarParaCadaTarefa = (callback: (tarefa: Tarefa) => void): void => {
  tarefas.forEach(callback);
};

const formatarEntrada = (valor: unknown): string => {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }

  if (typeof valor === "number") {
    return `Número: ${valor}`;
  }

  if (typeof valor === "boolean") {
    return valor ? "Sim" : "Não";
  }

  return "Tipo inválido";
};