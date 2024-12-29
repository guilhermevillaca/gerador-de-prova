import { Pais } from "./pais.model";

export class Estado {
    id!: number;
    nome!: string;
    uf!: string;
    pais!: Pais;
}
