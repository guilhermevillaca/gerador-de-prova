import { Disciplina } from "./disciplina.model";
import { Professor } from "./professor.model";

export class Prova {
    id!: number;
    data!: any;
    professor!: Professor;
    disciplina!: Disciplina;
    turno!: any;
    periodoLetivo!: string;
    observacoes!: string;
}
