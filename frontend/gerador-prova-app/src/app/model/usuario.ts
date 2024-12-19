import { Pessoa } from "./pessoa";

export class Usuario {
    id!: number|null;
    login!: string|null;
    senha!: string|null;
    pessoa?: Pessoa|null;
}
