import { Pessoa } from "./pessoa.model";

export class Telefone {
    id!: number | null;
    ddd?: string | null;
    numero?: string | null;
    principal?: boolean | null;
    pessoa?: Pessoa | null;

    static create(id: number | null, ddd: string | null, numero: string | null, principal: boolean | null, id_pessoa: number | null): Telefone{
        const telefone = new Telefone();
        telefone.id = id;
        telefone.ddd = ddd;
        telefone.numero = numero;
        telefone.principal = principal;
        telefone.pessoa = {
            id: id_pessoa
        }
        return telefone;    
    }
}
