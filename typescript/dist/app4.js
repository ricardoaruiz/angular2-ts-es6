"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDao_1 = require("./ConcessionariaDao");
var PessoaDao_1 = require("./PessoaDao");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Carro_1 = __importDefault(require("./Carro"));
// Teste concessionariaDao
var concessionaria = new Concessionaria_1.default('Rua 123', []);
var concessionariaDao = new ConcessionariaDao_1.ConcessionariaDao();
concessionariaDao.inserir(concessionaria);
console.log(concessionariaDao.selecionarTodos());
// teste pessoaDao
var pessoa = new Pessoa_1.default('', new Carro_1.default('', 0), new Carro_1.default('', 0));
var pessoaDao = new PessoaDao_1.PessoaDao();
pessoaDao.inserir(pessoa);
console.log(pessoaDao.selecionarTodos());
