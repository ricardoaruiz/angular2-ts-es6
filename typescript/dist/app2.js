"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
//Regras de negócio - Parte 1
// criar carros
var carroFiesta = new Carro_1.default('Fiesta', 4);
var carroUp = new Carro_1.default('Up TSI', 4);
var carroOnix = new Carro_1.default('Onix LTZ', 4);
// montar lista de carros - as duas formas abaixo são válidas.
var listaDeCarros = [carroFiesta, carroUp, carroOnix];
//let listaDeCarros: Carro[] = [ carroFiesta, carroUp, carroOnix];
// criação de uma concessionária
var concessionaria = new Concessionaria_1.default('Av. Paulista', listaDeCarros);
// exibir a lista de carros
console.log('===Concessionária===');
console.log(concessionaria);
// criando uma pessoa
var cliente = new Pessoa_1.default('Ricardo', carroUp, carroFiesta);
console.log('===Cliente===');
console.log(cliente);
// mostrar o carro preferido da pessoa
console.log('O carro preferido do ' + cliente.dizerNome() + ' é ' + cliente.dizerCarroPreferido().obterModelo());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro.obterModelo() === cliente.dizerCarroPreferido().obterModelo()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
