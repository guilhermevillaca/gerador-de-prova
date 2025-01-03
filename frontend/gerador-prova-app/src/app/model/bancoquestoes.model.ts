import { Disciplina } from "./disciplina.model";
import { Questao } from "./questao.model";

export class BancoQuestoes {
    id!: number | null;
    nome!: string | null;
    disciplina!: Disciplina | null;
    questoes!: Questao[] | null;

    static create(id: number | null, nome: string | null, id_disciplina: any | null) : BancoQuestoes{
        const banco = new BancoQuestoes();
        banco.id = id;
        banco.nome = nome;
        banco.disciplina = {
           id: id_disciplina
        };
        return banco;
    }
}
