"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    Concessionaria.prototype.fornecerHorarioDeFuncionamento = function () {
        return 'De segunda a sexta das 08h00 as 18h00 e sábado das 08h00 as 12h00';
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
