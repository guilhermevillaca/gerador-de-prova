import { Pessoa } from "./pessoa.model";

export class Telefone {
    id!: number;
    ddd!: string;
    numero!: string;
    principal!: boolean;
    pessoa!: Pessoa;
}
