import { Cidade } from "./cidade.model";
import { Pessoa } from "./pessoa.model";

export class Endereco {
    id!: number | null;
    cep?: string | null;
    logradouro?: string | null;
    bairro?: string | null;
    numero?: string | null;
    complemento?: string | null;
    cidade?: Cidade |null;
    pessoa?: Pessoa | null;

    static create(id: number | null, cep: string | null, logradouro: string | null, bairro: string | null,
        numero: string | null, complemento: string | null, id_cidade: number | null, id_pessoa: number | null): Endereco{
        const endereco = new Endereco();
        endereco.id = id;
        endereco.cep = cep;
        endereco.logradouro = logradouro;
        endereco.bairro = bairro;
        endereco.numero = numero;
        endereco.complemento = complemento;
        endereco.cidade = {
            id: id_cidade
        };
        endereco.pessoa = {
            id: id_pessoa       
        }
        return endereco;
    }
}
