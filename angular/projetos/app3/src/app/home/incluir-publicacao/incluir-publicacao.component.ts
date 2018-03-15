import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as firebase from 'firebase';

import { BdService } from '../../service/bd.service';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  // Email do usuario logado recuperado do firebase
  public email: string = undefined;

  // Formulário de publicação
  public formularioNovaPublicacao: FormGroup;

  /**
   * Construtor da classe do componente
   * @param formBuilder
   */
  constructor(
    private formBuilder: FormBuilder,
    private bdService: BdService
  ) { }

  ngOnInit() {
    this.buildForm();

    //Inscrição no serviço do firebase que retorna o objeto do usuario logado
    //a cada alteração que ocorrer com o mesmo.
    firebase.auth().onAuthStateChanged( (user: firebase.User) => {
      if(user) {
        this.email = user.email;
      }
    })
  }

  /**
   * Realiza uma nova publicação
   */
  public publicar(): void {
    this.bdService.publicar({
      email: this.email,
      titulo: this.formularioNovaPublicacao.value.titulo
    });
  }

  /**
   * Constroi a referência do formulário de publicação
   */
  private buildForm(): void {
    this.formularioNovaPublicacao = this.formBuilder.group({
      titulo: ['', []]
    })
  }

}
