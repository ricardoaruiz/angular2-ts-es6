import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formularioPedido')
  private form: NgForm;

  //private idPedidoCompra: number;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmarCompra(): void {
    console.log(this.form);

    let pedido: Pedido = new Pedido(
        this.form.control.value.endereco,
        this.form.value.numero,
        this.form.value.complemento,
        this.form.value.formaPagamento
      )

    this.ordemCompraService.efetivarCompra(pedido)
      .subscribe( (idPedidoCompra: number) => {
        console.log('Pedido criado com sucesso. Id do pedido é: ' + idPedidoCompra);        
       // this.idPedidoCompra = idPedidoCompra
      })
  }
}
