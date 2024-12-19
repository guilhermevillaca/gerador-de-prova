import { Disciplina } from "./disciplina";
import { Professor } from "./professor";

export class Prova {
    id!: number|null;
    data!: string|null;
    professor?: Professor|null;
    disciplina?: Disciplina|null;
    turno?: string|null;
    observacoes!: string|null;
}
