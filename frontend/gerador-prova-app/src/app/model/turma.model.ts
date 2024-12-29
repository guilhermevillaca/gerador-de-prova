export class Turma {
    id!: number | null;
    nome?: string | null;
    turno?: string | null;
    periodoLetivo?: string | null;

    static create(id: number | null, nome: string | null, turno: string | null, periodoLetivo: string | null): Turma{
        const turma = new Turma();
        turma.id = id;
        turma.nome = nome;
        turma.turno = turno;
        turma.periodoLetivo = periodoLetivo;
        return turma;
    }

}
