import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Usuario } from '../model/usuario.model';
import { AutenticacaoService } from '../service/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  public mostrarCadastro: EventEmitter<string> = new EventEmitter<string>();

  public formLogin: FormGroup;

  public usuarioNaoEncontrado: boolean = false;

  /**
   * Construtor da classe do componente.
   * 
   * @param formBuilder 
   * @param autenticacaoService 
   */
  constructor(
      private formBuilder: FormBuilder,
      private autenticacaoService: AutenticacaoService
    ) { 
    this.buildFormularioLogin();
  }

  ngOnInit() {
  }

  /**
   * Método para mostrar o painel de cadastro de um novo usuário
   */
  public irParaCadastro(): void {
    this.mostrarCadastro.emit('cadastro');
  }

  /**
   * Ação no botão que fará o login do usuário.
   */
  public autenticar(): void {
    if (this.formLogin.invalid) {
      Object.keys(this.formLogin.controls).forEach( key => {
        this.formLogin.controls[key].markAsTouched();
      })
      return;      
    }
    this.autenticacaoService
      .autenticar(Usuario.buildFromFormGroup(this.formLogin))
        .then ( (resposta: any) => {
          console.log('Login ok', resposta)
          this.usuarioNaoEncontrado = false;
        })
        .catch ( (erro: any) => {
          console.log('login erro', erro);
          if (erro.code === 'auth/user-not-found') {
            this.usuarioNaoEncontrado = true;
          } else {
            this.usuarioNaoEncontrado = false;
          }  
        })
    
  }

  /**
   * Cria a referência do formulário com o template
   */
  private buildFormularioLogin(): void {
    this.formLogin = this.formBuilder.group({
      email: ['ricardo.almendro.ruiz@gmail.com', [Validators.required, Validators.email]],
      senha: ['123456', [Validators.required]]
    });
  }

}
