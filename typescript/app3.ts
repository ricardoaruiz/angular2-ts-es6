import Moto from "./Moto";
import Carro from "./Carro";
import Concessionaria from "./Concessionaria";

let carro = new Carro('Veloster',3);

let moto = new Moto('Intruder');

let concessionaria = new Concessionaria('Rua 123', []);
console.log(concessionaria.fornecerHorarioDeFuncionamento());

moto.acelerar();
console.log(moto);

carro.acelerar();
console.log(carro);