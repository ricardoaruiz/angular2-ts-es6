import Veiculo from "./Veiculo";

/** 
 * Classe que representa um carro
 * 
 * Os modificadores de acesso 'private', 'public' são
 * do TS quando o arquivo é transpilado mesmo se fosse para o ES6
 * não teria esse controle de visibilidade.
*/
export default class Carro extends Veiculo {

    private numeroDePortas: number;    

    constructor(modelo: string, numeroDePortas: number) {
        super(modelo);
        this.numeroDePortas = numeroDePortas;
    }

}