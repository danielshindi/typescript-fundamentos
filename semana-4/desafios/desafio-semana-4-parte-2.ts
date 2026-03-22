// Sistema de usuários
type Perfil = "admin" | "editor" | "leitor";

type Usuario = {
    readonly id: number;
    nome: string;
    email?: string;
    perfil: Perfil;
    ativo: boolean;
};

let usuarios: Usuario[] = [
    { id: 1, nome: 'Adalberto', perfil: "leitor", ativo: false },
    { id: 2, nome: 'Daniel', email: 'daniel@email.com', perfil: "editor", ativo: true },
    { id: 3, nome: 'Carla', email: 'carla@email.com', perfil: "admin", ativo: true },
    { id: 4, nome: 'Roberta', perfil: "leitor", ativo: true }
];

const listarUsuarios = (): void => {
    if (usuarios.length === 0) {
        console.log("Lista de usuários vazia.");
        return;
    }
    usuarios.forEach(usuario => console.log(usuario));
};

listarUsuarios();

const listarUsuariosAtivos = (): void => {
    const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);
    if (usuariosAtivos.length === 0) {
        console.log("Não há usuários ativos.");
        return;
    }
    usuariosAtivos.forEach(usuario => console.log(usuario));
};

listarUsuariosAtivos();

const buscarUsuarioPorId = (id: number): Usuario | undefined => {
    const usuarioBuscado = usuarios.find(usuario => usuario.id === id);
    if (!usuarioBuscado) {
        console.log("Usuário não encontrado.");
        return;
    }
    return usuarioBuscado;
};

console.log(buscarUsuarioPorId(5));
console.log(buscarUsuarioPorId(2));


const adicionarUsuario = (usuario: Usuario): void => {
    if (usuarios.some(usuarioDaLista => usuario.id === usuarioDaLista.id)) {
        console.log(`ID ${usuario.id} já existe.`);
        return;
    }
    usuarios = [ ...usuarios, usuario];
    console.log("Usuário adicionado com sucesso");
};

const usuario1: Usuario = { id: 3, nome: 'Ariele', email: 'ariele@email.com', perfil: "admin", ativo: true };
const usuario2: Usuario = { id: 5, nome: 'Andre', email: 'andre@email.com', perfil: "admin", ativo: true };

adicionarUsuario(usuario1);
listarUsuarios();

adicionarUsuario(usuario2);
listarUsuarios();


const desativarUsuario = (id: number): void => {
    const usuario = usuarios.find(usuarioDaLista => usuarioDaLista.id === id);
    if (!usuario) {
        console.log("Usuário não encontrado.");
        return;
    }
    if (!usuario.ativo) {
        console.log("Usuário já está inativo.");
        return;
    }
    usuarios = usuarios.map(usuarioDaLista => {
        if (usuarioDaLista.id === id) {
            return { ...usuarioDaLista, ativo: false };
        }
        return usuarioDaLista;
    });
    console.log(`Usuário de ID ${id} inativado com sucesso.`);
};

desativarUsuario(1);
listarUsuarios();

desativarUsuario(2);
listarUsuarios();

desativarUsuario(10);
listarUsuarios();


const atualizarEmail = (id: number, email?: string): void => {
    const usuario = usuarios.find(user => user.id === id);
    if (!usuario) {
        console.log("Usuário não encontrado.");
        return;
    }
    if (email === undefined) {
        usuarios = usuarios.map(user => {
            if (user.id === id) {
                const { email, ...usuarioSemEmail } = user;
                return usuarioSemEmail;
            }
            return user;
        });
        console.log(`E-mail de usuário de ID ${id} removido com sucesso.`)
        return;
    }
    usuarios = usuarios.map(user => {
        if (user.id === id) {
            return { ...user, email: email };
        }
        return user;
    });

    console.log(`E-mail de usuário de ID ${id} atualizado com sucesso.`)
};

atualizarEmail(2);
listarUsuarios();

atualizarEmail(3, "carla2@email.com");
listarUsuarios();


const listarPorPerfil = (perfil: Perfil): void => {
   const usuariosFiltrados = usuarios.filter((usuario) => usuario.perfil === perfil);

    if (usuariosFiltrados.length === 0) {
        console.log(`Nenhum usuário com perfil ${perfil}.`);
        return;
    }

    usuariosFiltrados.forEach((usuario) => console.log(usuario));
};


console.log();
listarPorPerfil("admin");
console.log();
listarPorPerfil("leitor");
console.log();
listarPorPerfil("editor");