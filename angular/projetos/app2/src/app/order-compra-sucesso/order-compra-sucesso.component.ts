import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-compra-sucesso',
  templateUrl: './order-compra-sucesso.component.html',
  styleUrls: ['./order-compra-sucesso.component.css']
})
export class OrderCompraSucessoComponent implements OnInit {

  @Input()
  public idPedidoCompra: number;

  constructor() { }

  ngOnInit() {
  }

}
