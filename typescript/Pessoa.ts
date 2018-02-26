import Carro from './Carro';
/** 
 * Classe Pessoa
*/
export default class Pessoa {

    private nome: string;
    private carroPreferido: Carro;
    private carro: Carro;

    constructor(nome: string, carroPreferido: Carro, carro: Carro) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
        this.carro = carro;
    }

    public dizerNome(): string {
        return this.nome;
    }

    public dizerCarroPreferido(): Carro {
        return this.carroPreferido;
    }

    public informarCarroPreferido(carro: Carro): void {
        this.carroPreferido = carro;
    }

    public dizerCarroQueTem(): Carro {
        return this.carro;
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro;
    }

}