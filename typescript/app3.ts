import Moto from "./Moto";
import Carro from "./Carro";

let carro = new Carro('Veloster',3);

let moto = new Moto('Intruder');

moto.acelerar();
console.log(moto);

carro.acelerar();
console.log(carro);