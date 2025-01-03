import { Disciplina } from "./disciplina.model";
import { Professor } from "./professor.model";

export class Prova {
    id!: number | null;
    data?: any | null;
    professor?: Professor | null;
    disciplina?: Disciplina | null;
    turno?: any | null;
    periodoLetivo?: string | null;
    observacoes?: string | null;
    formato?: string|null;

    static create(id: number | null, data: any | null, id_professor: number | null, id_disciplina: number | null, turno: any | null, 
        periodoLetivo: string | null, formato: string | null, observacoes: string | null): Prova{
        const prova = new Prova();
        prova.id = id;
        prova.data = data;
        prova.professor = {
            id: id_professor
        },
        prova.disciplina = {
            id: id_disciplina        
        }
        prova.turno = turno;
        prova.periodoLetivo = periodoLetivo;
        prova.observacoes = observacoes;
        prova.formato = formato;
        return prova;
    }

    static getNomeDinamico(prova: Prova): string {
        const nomeDisciplina = prova.disciplina?.nome || "Disciplina";
        const nomeProfessor = prova.professor?.pessoa?.nome || "Professor";
        const dataProva = prova.data ? new Date(prova.data).toLocaleDateString('pt-BR') : "Data";
        const turnoProva = prova.turno || "Turno";

        return `${nomeDisciplina}_${nomeProfessor}_${dataProva}_${turnoProva}`.replace(/\s+/g, '_');
    }

}
