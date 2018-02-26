import { DaoInterface } from "./DaoInterface";
import { Dao } from "./Dao";
//import { ConcessionariaDao } from "./ConcessionariaDao";
//import { PessoaDao } from "./PessoaDao";
import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";
import Carro from "./Carro";

// Teste concessionariaDao
let concessionaria = new Concessionaria('Rua 123', []);
//let concessionariaDao: DaoInterface = new ConcessionariaDao();
let concessionariaDao: Dao<Concessionaria> = new Dao<Concessionaria>();

concessionariaDao.inserir(concessionaria);
console.log(concessionariaDao.selecionarTodos());

// teste pessoaDao
let pessoa = new Pessoa('',new Carro('',0), new Carro('',0));
//let pessoaDao: DaoInterface = new PessoaDao();
let pessoaDao: Dao<Pessoa> = new Dao<Pessoa>();

pessoaDao.inserir(pessoa);
console.log(pessoaDao.selecionarTodos());