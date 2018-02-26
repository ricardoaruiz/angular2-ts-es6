"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Carro_1 = __importDefault(require("./Carro"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDao.prototype.inserir = function (pessoa) {
        console.log('lógica de insert');
        return true;
    };
    PessoaDao.prototype.atualizar = function (pessoa) {
        console.log('lógica de update');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('lógica de delete');
        return new Pessoa_1.default('', new Carro_1.default('', 0), new Carro_1.default('', 0));
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('lógica de select');
        return new Pessoa_1.default('', new Carro_1.default('', 0), new Carro_1.default('', 0));
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('lógica de getAll');
        return [
            new Pessoa_1.default('', new Carro_1.default('', 0), new Carro_1.default('', 0)),
            new Pessoa_1.default('', new Carro_1.default('', 0), new Carro_1.default('', 0))
        ];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
