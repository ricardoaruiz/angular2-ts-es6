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
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
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
//Regras de negócio - Parte 1
// criar carros
var carroFiesta = new Carro('Fiesta', 4);
var carroUp = new Carro('Up TSI', 4);
var carroOnix = new Carro('Onix LTZ', 4);
// montar lista de carros - as duas formas abaixo são válidas.
var listaDeCarros = [carroFiesta, carroUp, carroOnix];
//let listaDeCarros: Carro[] = [ carroFiesta, carroUp, carroOnix];
// criação de uma concessionária
var concessionaria = new Concessionaria('Av. Paulista', listaDeCarros);
// exibir a lista de carros
console.log(concessionaria);
