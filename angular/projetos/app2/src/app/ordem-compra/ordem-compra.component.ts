import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { OrdemCompraService } from '../ordem-compra.service'
import { CarrinhoService } from '../carrinho.service';
import { Pedido } from '../shared/pedido.model'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idDoPedido: number = undefined

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
    console.log("OrdemCompra - Itens do carrinho: ",this.carrinhoService.exibirItens());
  }

  public confirmarCompra(): void {
    console.log(this.form);
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
    console.log('Vai submeter o http');

    let pedido: Pedido = new Pedido(
      this.form.get('endereco').value,
      this.form.get('numero').value,
      this.form.get('complemento').value,
      this.form.get('formaPagamento').value
    )

    this.ordemCompraService.efetivarCompra(pedido)
    .subscribe( (idDoPedido: number) => {
      this.idDoPedido = idDoPedido;
    } )
    
  }
}
