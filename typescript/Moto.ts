import Veiculo from "./Veiculo";

/** 
 * Classe que representa uma moto.
*/
class Moto extends Veiculo {

    constructor(modelo: string) {
        super(modelo);
    }

    /**Método sobrescrito da class Veiculo */
    acelerar(): void {
        this.velocidade = this.velocidade + 15;
    }

}

export default Moto;