import { Questao } from "./questao";

export class Alternativa {
    id!: number|null;
    formato!: string|null;
    descricao!: string|null;
    questao?: Questao|null;
}
