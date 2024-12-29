export class Disciplina {
    id!: number | null;
    nome?: string | null;
    codigo?: string | null;
    descricao?: string | null;

    static create(id: number | null, nome: string | null, codigo: string | null, descricao: string | null): Disciplina{
        const disciplina = new Disciplina();
        disciplina.id = id;
        disciplina.nome = nome;
        disciplina.codigo = codigo;
        disciplina.descricao = descricao;
        return disciplina;
    }
}
