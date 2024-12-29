import { Prova } from "./prova.model";

export class Questao {
    id!: number | null;
    tipo?: any | null;
    enunciado?: string | null;
    numeroDeLinhas?: number | null;
    prova?: Prova | null;

    static create(id: number | null, tipo: any | null, enunciado:  string | null, numeroDeLinhas: number | null, id_prova: number | null): Questao{
        const questao = new Questao();
        questao.id = id;
        questao.tipo = tipo;
        questao.enunciado = enunciado;
        questao.numeroDeLinhas = numeroDeLinhas;
        questao.prova = {
            id: id_prova
        }
        return questao;
    }
}
