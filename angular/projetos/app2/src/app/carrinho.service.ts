import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/oferta.model';

class CarrinhoService {

    public itens: ItemCarrinho[] = [];

    public exibirItens(): ItemCarrinho[] {
        return this.itens;
    }

    public incluirItem(oferta: Oferta): void {
        let item = this.obtemItemCarrinho(oferta);
        if(item) {
            item.quantidade++;
        } else {
            this.itens.push(ItemCarrinho.build(oferta))
        }
    }

    public obtemTotalCarrinho(): number {
        let valorTotalCarrinho: number = 0;
        this.itens.forEach( (itemCarrinhoAtual: ItemCarrinho) => {
            valorTotalCarrinho += itemCarrinhoAtual.quantidade * itemCarrinhoAtual.valor;
        });
        return valorTotalCarrinho;
    }

    public adicionarQuantidade(itemCarrinho: ItemCarrinho): ItemCarrinho[] {
        let item = this.obtemItemCarrinho(itemCarrinho);
        if(item.quantidade < 10) {
            item.quantidade++;
        }
        return this.itens
    }

    public removerQuantidade(itemCarrinho: ItemCarrinho): ItemCarrinho[] {
        let item = this.obtemItemCarrinho(itemCarrinho);
        item.quantidade--;
        if(item.quantidade === 0) {
          let indiceItemNoCarrinho = this.itens.indexOf(itemCarrinho);
          this.itens.splice(indiceItemNoCarrinho, 1);
        }
        return this.itens
    }

    public esvaziarCarrinho(): void {
        this.itens = [];
    }

    private obtemItemCarrinho(item: Oferta | ItemCarrinho): ItemCarrinho {
        return this.itens.find( (currentItem: ItemCarrinho) => {
            return currentItem.id === item.id;
        })
    }

}

export { CarrinhoService };