import { Oferta } from "./oferta.model";

class ItemCarrinho {

    constructor(
        public id: number,
        public img: object,
        public titulo: string,
        public descricao_oferta: string,
        public valor: number,
        public quantidade: number
    ) {}

    public static build(oferta: Oferta): ItemCarrinho {
        return new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        )
    }

}

export { ItemCarrinho }