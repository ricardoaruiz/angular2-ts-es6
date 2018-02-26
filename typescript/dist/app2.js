"use strict";
/**
 * Classe que representa um carro
 *
 * Os modificadores de acesso 'private', 'public' são
 * do TS quando o arquivo é transpilado mesmo se fosse para o ES6
 * não teria esse controle de visibilidade.
*/
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    Carro.prototype.obterModelo = function () {
        return this.modelo;
    };
    return Carro;
}());
/**
 * Classe concessionaria
*/
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco) {
        this.endereco = endereco;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
/**
 * Classe Pessoa
*/
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido, carro) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
        this.carro = carro;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.informarCarroPreferido = function (carro) {
        this.carroPreferido = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    return Pessoa;
}());
var concessionaria = new Concessionaria('Avenida Paulista');
var fiesta = new Carro("Fiesta", 4);
var upTsi = new Carro('Up TSI', 4);
var pessoa = new Pessoa('Ricardo Ruiz', upTsi, fiesta);
console.log('Meu nome é: ' + pessoa.dizerNome());
console.log('Meu carro é: ' + pessoa.dizerCarroQueTem().obterModelo());
console.log('Meu carro preferido é: ' + pessoa.dizerCarroPreferido().obterModelo());
pessoa.comprarCarro(upTsi);
console.log('Meu nome é: ' + pessoa.dizerNome());
console.log('Meu carro é: ' + pessoa.dizerCarroQueTem().obterModelo());
console.log('Meu carro preferido é: ' + pessoa.dizerCarroPreferido().obterModelo());
