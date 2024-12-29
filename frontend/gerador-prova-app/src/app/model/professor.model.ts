import { Pessoa } from "./pessoa.model";

export class Professor {
    id!: number | null;
    grau?: any | null;
    pessoa?: Pessoa | null;

    static create(id: number | null, grau: any | null, id_pessoa: number | null): Professor{
        const professor = new Professor();
        professor.id = id;
        professor.grau = grau;
        professor.pessoa = {
            id: id_pessoa
        }
        return professor;
    }
}
