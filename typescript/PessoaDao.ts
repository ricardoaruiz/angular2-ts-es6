import { DaoInterface } from "./DaoInterface";
import Pessoa from "./Pessoa";
import Carro from "./Carro";

export class PessoaDao implements DaoInterface {

    nomeTabela: string = 'tb_pessoa';

    inserir(pessoa: Pessoa): boolean {
        console.log('lógica de insert');
        return true;
    }

    atualizar(pessoa: Pessoa): boolean {
        console.log('lógica de update');
        return true;
    }

    remover(id: number): Pessoa {
        console.log('lógica de delete');
        return new Pessoa('',new Carro('',0),new Carro('',0));
    }

    selecionar(id: number): Pessoa {
        console.log('lógica de select');
        return new Pessoa('',new Carro('',0),new Carro('',0));
    }

    selecionarTodos(): Array<Pessoa> {
        console.log('lógica de getAll');
        return [
                new Pessoa('',new Carro('',0),new Carro('',0)), 
                new Pessoa('',new Carro('',0),new Carro('',0))
               ];
    }

}