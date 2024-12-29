import { Estado } from "./estado.model";

export class Cidade {
    id!: number | null;
    nome?: string | null;
    estado?: Estado|null;

    static create(id: number | null, nome: string | null, id_estado: number | null): Cidade {
        const cidade = new Cidade();
        cidade.id = id;
        cidade.nome = nome;
        cidade.estado = {
          id: id_estado,
          nome: null, // Ajuste conforme necessário
          uf: null,
          pais: null
        };
        return cidade;
      }
}
