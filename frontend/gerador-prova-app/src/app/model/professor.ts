import { Pessoa } from "./pessoa";

export class Professor {
    id!: number|null;
    grau!: string|null;
    pessoa?: Pessoa|null;
}
