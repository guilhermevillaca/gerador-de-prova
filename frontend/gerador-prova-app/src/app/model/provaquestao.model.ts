import { Prova } from "./prova.model";
import { Questao } from "./questao.model";

export class ProvaQuestao {
    id!: number | null;
    prova!: Prova | null;
    questao!: Questao | null;
    peso!: number | null;
    ordem!: number | null;

    static create(id: number | null, id_prova: any | null, id_questao: any | null, peso: number | null, ordem: number | null){
        const prova = new ProvaQuestao();
        prova.id = id;
        prova.prova = {
            id: id_prova
        };
        prova.questao = {
            id: id_questao
        };
        prova.peso = peso;
        prova.ordem = ordem;
        return prova;
    }

    
}
