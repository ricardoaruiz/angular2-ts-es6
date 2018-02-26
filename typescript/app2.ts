/** 
 * Classe que representa um carro
 * 
 * Os modificadores de acesso 'private', 'public' são
 * do TS quando o arquivo é transpilado mesmo se fosse para o ES6
 * não teria esse controle de visibilidade.
*/
class Carro {

    private modelo: string;
    private numeroDePortas: number;
    private velocidade: number = 0;

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10;
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }

}

/** 
 * Classe concessionaria
*/
class Concessionaria {

    private endereco: string;
    private listaDeCarros: Carro[];

    constructor(endereco: string){
        this.endereco = endereco;
    }

    public fornecerEndereco() {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros;
    }

}

let concessionaria = new Concessionaria('Avenida Paulista');
console.log(concessionaria);

let carroA = new Carro("Fiesta", 4);
console.log(carroA);
carroA.acelerar();
console.log(carroA);