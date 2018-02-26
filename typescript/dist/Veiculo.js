"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Classe generalizada para um veículo
*/
var Veiculo = /** @class */ (function () {
    function Veiculo(modelo) {
        this.velocidade = 0;
        this.modelo = modelo;
    }
    Veiculo.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Veiculo.prototype.parar = function () {
        this.velocidade = 0;
    };
    Veiculo.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    Veiculo.prototype.obterModelo = function () {
        return this.modelo;
    };
    return Veiculo;
}());
exports.default = Veiculo;
