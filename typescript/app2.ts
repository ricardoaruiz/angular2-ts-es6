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

let concessionaria = new Concessionaria('Avenida Paulista');

let fiesta = new Carro("Fiesta", 4);
let upTsi = new Carro('Up TSI', 4);
let pessoa = new Pessoa('Ricardo Ruiz', upTsi, fiesta);

console.log('Meu nome é: ' + pessoa.dizerNome());
console.log('Meu carro é: ' + pessoa.dizerCarroQueTem().obterModelo());
console.log('Meu carro preferido é: ' + pessoa.dizerCarroPreferido().obterModelo());

pessoa.comprarCarro(upTsi)

console.log('Meu nome é: ' + pessoa.dizerNome());
console.log('Meu carro é: ' + pessoa.dizerCarroQueTem().obterModelo());
console.log('Meu carro preferido é: ' + pessoa.dizerCarroPreferido().obterModelo());
