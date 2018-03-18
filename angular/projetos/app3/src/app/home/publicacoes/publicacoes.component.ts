import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

import { BdService } from '../../service/bd.service';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})
export class PublicacoesComponent implements OnInit {

  // Email do usuário logado recebido do firebase
  private email: string;

  public publicacoes: any;

  constructor(
    private bdService: BdService
  ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged( (user: firebase.User) => {
      this.email = user.email;
      this.atualizarTimeLine();
    })
  }

  public atualizarTimeLine(): void {
    this.bdService.consultaPublicacoes(this.email)
      .then( (publicacoes: any) => {
        this.publicacoes = publicacoes;
      } )
  }

}
