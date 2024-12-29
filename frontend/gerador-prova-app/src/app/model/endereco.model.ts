import { Cidade } from "./cidade.model";
import { Pessoa } from "./pessoa.model";

export class Endereco {
    id!: number;
    cep!: string;
    logradouro!: string;
    bairro!: string;
    numero!: string;
    complemento!: string;
    cidade!: Cidade|null;
    pessoa!: Pessoa;
}
