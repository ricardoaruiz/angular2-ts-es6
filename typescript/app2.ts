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

    public obterModelo(): string {
        return this.modelo;
    }

}

/** 
 * Classe concessionaria
*/
class Concessionaria {

    private endereco: string;
    private listaDeCarros: Array<Carro>;

    constructor(endereco: string, listaDeCarros: Array<Carro>){
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco() {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros;
    }

}

/** 
 * Classe Pessoa
*/
class Pessoa {

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
//Regras de negócio - Parte 1
// criar carros
let carroFiesta = new Carro('Fiesta', 4);
let carroUp = new Carro('Up TSI', 4);
let carroOnix = new Carro('Onix LTZ', 4);

// montar lista de carros - as duas formas abaixo são válidas.
let listaDeCarros: Array<Carro> = [ carroFiesta, carroUp, carroOnix];
//let listaDeCarros: Carro[] = [ carroFiesta, carroUp, carroOnix];

// criação de uma concessionária
let concessionaria = new Concessionaria('Av. Paulista', listaDeCarros);

// exibir a lista de carros
console.log(concessionaria);
