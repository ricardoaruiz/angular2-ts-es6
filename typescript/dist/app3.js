"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = __importDefault(require("./Moto"));
var Carro_1 = __importDefault(require("./Carro"));
var carro = new Carro_1.default('Veloster', 3);
var moto = new Moto_1.default('Intruder');
moto.acelerar();
console.log(moto);
carro.acelerar();
console.log(carro);
