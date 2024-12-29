import { Prova } from "./prova.model";

export class Questao {
    id!: number;
    tipo!: any;
    enunciado!: string;
    numeroDeLinhas!: number;
    prova!: Prova;
}
