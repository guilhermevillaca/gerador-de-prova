export class Pessoa {
    id!: number|null;
    nome?: string|null;
    cpf?: string|null;
    dataNascimento?: any|null;
    email?: string|null;

    static create(id: number | null, nome: string | null, cpf: string | null, dataNascimento: any | null, email: string | null): Pessoa{
        const pessoa = new Pessoa();
        pessoa.id = id;
        pessoa.nome = nome;
        pessoa.cpf = cpf;
        pessoa.dataNascimento = dataNascimento;
        pessoa.email = email;
        return pessoa;
    }
}
