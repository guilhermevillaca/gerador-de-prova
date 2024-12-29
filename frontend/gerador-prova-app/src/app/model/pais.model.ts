export class Pais {
    id!: number | null;
    nome?: string | null;
    sigla?: string | null;

    static create(id: number | null, nome: string | null, sigla: string | null): Pais{
        const pais = new Pais();
        pais.id = id;
        pais.nome = nome;
        pais.sigla = sigla;
        return pais;
    }
}
