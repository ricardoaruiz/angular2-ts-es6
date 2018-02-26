import Carro from './Carro';
import Pessoa from './Pessoa';
import Concessionaria from './Concessionaria';

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
console.log('===Concessionária===')
console.log(concessionaria);

// criando uma pessoa
let cliente = new Pessoa('Ricardo', carroUp, carroFiesta);
console.log('===Cliente===')
console.log(cliente);

// mostrar o carro preferido da pessoa
console.log('O carro preferido do ' + cliente.dizerNome() + ' é ' + cliente.dizerCarroPreferido().obterModelo());

concessionaria.mostrarListaDeCarros().map( (carro: Carro) => {
    if (carro.obterModelo() === cliente.dizerCarroPreferido().obterModelo()) {
        cliente.comprarCarro(carro);
    }
})

console.log(cliente.dizerCarroQueTem());