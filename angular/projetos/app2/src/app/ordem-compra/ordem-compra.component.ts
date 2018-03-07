import { Component, OnInit } from '@angular/core';

import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public pedido: Pedido = new Pedido('','','','');
  public idPedidoCompra: number = undefined;

  // valores relacionados a cada campo do formulário
  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''

  //controles de validação dos campos
  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean

  //estados primitivos dos campos (pristine)
  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true

  //controlar botão confirmar compra
  public formEstado: string = 'disabled'

  constructor(private ordemCompraservice: OrdemCompraService) { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco    
    this.enderecoEstadoPrimitivo = false
    this.endereco.length > 3 ? this.enderecoValido = true : this.enderecoValido = false
    this.habilitaForm()
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero
    this.numeroEstadoPrimitivo = false
    this.numeroValido = this.numero.length > 0 ? true : false;
    this.habilitaForm()
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento 
    this.complementoEstadoPrimitivo = false
    this.complementoValido = this.complemento.length > 0 ? true : false
    this.habilitaForm()
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento
    this.formaPagamentoEstadoPrimitivo = false
    this.formaPagamentoValido = this.formaPagamento !== '' ? true : false
    this.habilitaForm()
  }

  public habilitaForm(): void {
    this.formEstado = this.enderecoValido && 
      this.numeroValido && this.formaPagamentoValido ? '' : 'disabled'
  }

  public confirmarCompra(): void {

    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;

    this.ordemCompraservice.efetivarCompra(this.pedido)
      .subscribe( (idPedidoCompra: number) => { 
        this.idPedidoCompra = idPedidoCompra;
      })
  }

}
