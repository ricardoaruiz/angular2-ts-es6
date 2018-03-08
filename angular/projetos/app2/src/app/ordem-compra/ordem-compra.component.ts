import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { OrdemCompraService } from '../ordem-compra.service'
import { CarrinhoService } from '../carrinho.service';
import { Pedido } from '../shared/pedido.model';
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idDoPedido: number = undefined
  public itens: ItemCarrinho[] = [];

  /*
    Referencia para o formulário do template
    Nessa referência precisamos definir os contoles do formulário, bem como
    as validações que esses controles devem ter.
  */
  public form: FormGroup = new FormGroup({
    'endereco' : new FormControl
      (
        null,
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(120)
        ]
      ),
    'numero' : new FormControl
      (
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(20)
        ]
      ),
    'complemento': new FormControl(null),
    'formaPagamento' : new FormControl
      (
        null,
        [
          Validators.required
        ]
      )
  });

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService) { 
    }

  ngOnInit() {
    this.itens = this.carrinhoService.exibirItens();
    //this.obtemTotalValorCarrinho();
  }

  public confirmarCompra(): void {
    
    if (this.form.invalid) {
      //Esse loop substitui as linhas abaixo
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key).markAsTouched();
      });
      // this.form.get('endereco').markAsTouched()
      // this.form.get('numero').markAsTouched()
      // this.form.get('complemento').markAsTouched()
      // this.form.get('formaPagamento').markAsTouched()
      return;
    }
    
      if (!this.itens.length) {
        alert('Você nao selecionou nenhum item')

      } else {

      let pedido: Pedido = new Pedido(
        this.form.get('endereco').value,
        this.form.get('numero').value,
        this.form.get('complemento').value,
        this.form.get('formaPagamento').value,
        this.itens
      )

      this.ordemCompraService.efetivarCompra(pedido)
      .subscribe( (idDoPedido: number) => {
        this.idDoPedido = idDoPedido;
      } )
    }
    
  }

  public adicionar(itemCarrinho: ItemCarrinho): void {
    this.itens = this.carrinhoService.adicionarQuantidade(itemCarrinho);
  }

  public remover(itemCarrinho: ItemCarrinho): void {
    this.itens = this.carrinhoService.removerQuantidade(itemCarrinho);
  }
}
