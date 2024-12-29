import { Pais } from "./pais.model";

export class Estado {
    id!: number | null;
    nome?: string | null;
    uf?: string | null;
    pais?: Pais | null;

    static create(id: number | null, nome: string | null, uf: string | null, id_pais: number | null): Estado{
        const estado = new Estado();
        estado.id = id;
        estado.nome = nome;
        estado.uf = uf;
        estado.pais = {
            id: id_pais
        }
        return estado;
    }
}
