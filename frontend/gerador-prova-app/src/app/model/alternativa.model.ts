import { Questao } from "./questao.model";

export class Alternativa {
    id!: number|null;
    formato?: string|null;
    descricao?: string|null;
    questao?: Questao|null;

    static create(id: number | null, formato: string | null, descricao: string | null, id_questao: number | null): Alternativa{
        const alternativa = new Alternativa();
        alternativa.id = id;
        alternativa.formato = formato;
        alternativa.descricao = descricao;
        alternativa.questao = {
            id: id_questao
        }
        return alternativa;
    }
}
