import { DaoInterface } from "./DaoInterface";
import Concessionaria from "./Concessionaria";

export class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tb_concessionaria';

    public inserir(concessionaria: Concessionaria): boolean {
        console.log('lógica de insert');
        return true;
    }

    public atualizar(concessionaria: Concessionaria): boolean {
        console.log('lógica de update');
        return true;
    }

    public remover(id: number): Concessionaria {
        console.log('lógica de delete');
        return new Concessionaria('',[]);
    }

    public selecionar(id: number): Concessionaria {
        console.log('lógica de select');
        return new Concessionaria('',[]);
    }

    public selecionarTodos(): Array<Concessionaria> {
        console.log('lógica de getAll');
        return [new Concessionaria('',[])];
    }

}