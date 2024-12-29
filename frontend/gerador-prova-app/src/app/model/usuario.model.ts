import { Pessoa } from "./pessoa.model";

export class Usuario {
    id!: number | null;
    login?: string | null;
    senha?: string | null;
    ativo?: boolean | null;
    pessoa?: Pessoa | null;

    static create(id: number | null, login: string | null, senha: string | null, ativo: boolean | null, id_pessoa: number | null): Usuario{
        const usuario = new Usuario();
        usuario.id = id;
        usuario.login = login;
        usuario.senha = senha;
        usuario.ativo = ativo;
        usuario.pessoa = {
            id: id_pessoa
        }
        return usuario;
    }
}
