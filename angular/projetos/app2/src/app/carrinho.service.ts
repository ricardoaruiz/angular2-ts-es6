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
            item.quantidade++
        } else {
            this.itens.push(ItemCarrinho.build(oferta))
        }
    }

    private obtemItemCarrinho(oferta: Oferta): ItemCarrinho {
        return this.itens.find( (currentItem) => {
            return currentItem.id === oferta.id;
        })
    }

}

export { CarrinhoService };