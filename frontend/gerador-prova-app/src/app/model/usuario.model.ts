import { Pessoa } from "./pessoa.model";

export class Usuario {
    id!: number;
    login!: string;
    senha!: string;
    ativo!: boolean;
    pessoa!: Pessoa;
}
