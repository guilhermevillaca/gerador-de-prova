import { Questao } from "./questao.model";

export class Alternativa {
    id!: number|null;
    formato!: string|null;
    descricao!: string|null;
    questao?: Questao|null;
}
