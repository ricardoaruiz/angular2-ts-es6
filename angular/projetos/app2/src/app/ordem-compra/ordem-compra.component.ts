import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''

  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean

  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco    
    this.endereco.length > 3 ? this.enderecoValido = true : this.enderecoValido = false
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero
    this.numeroValido = this.numero.length > 0 ? true : false;
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento 
    this.complementoValido = this.complemento.length > 0 ? true : false
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento
    this.formaPagamentoValido = this.formaPagamento !== '' ? true : false
  }

}
