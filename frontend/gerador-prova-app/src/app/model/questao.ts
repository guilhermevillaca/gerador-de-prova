import { Prova } from "./prova";

export class Questao {
    id!: number|null;
        tipo!: string|null;
        enunciado!: string|null;
        numeroDeLinhas!: number|null;
        prova?: Prova|null;
}
