"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Dao_1 = require("./Dao");
//import { ConcessionariaDao } from "./ConcessionariaDao";
//import { PessoaDao } from "./PessoaDao";
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Carro_1 = __importDefault(require("./Carro"));
// Teste concessionariaDao
var concessionaria = new Concessionaria_1.default('Rua 123', []);
//let concessionariaDao: DaoInterface = new ConcessionariaDao();
var concessionariaDao = new Dao_1.Dao();
concessionariaDao.inserir(concessionaria);
console.log(concessionariaDao.selecionarTodos());
// teste pessoaDao
var pessoa = new Pessoa_1.default('', new Carro_1.default('', 0), new Carro_1.default('', 0));
//let pessoaDao: DaoInterface = new PessoaDao();
var pessoaDao = new Dao_1.Dao();
pessoaDao.inserir(pessoa);
console.log(pessoaDao.selecionarTodos());
