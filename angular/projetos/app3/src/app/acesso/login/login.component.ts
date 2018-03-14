import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Usuario } from '../model/usuario.model';
import { AutenticacaoService } from '../service/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  public mostrarCadastro: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  public email: string = undefined;

  // Referência do formulário do template
  public formLogin: FormGroup;

  // Mensagens de erro do processo de login
  public msgErroLogin: string = undefined;

  /**
   * Construtor da classe do componente.
   * 
   * @param formBuilder 
   * @param autenticacaoService 
   */
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private autenticacaoService: AutenticacaoService
    ) { 
    this.buildFormularioLogin();
  }

  ngOnInit() {
    this.formLogin.controls['email'].setValue(this.email);
  }

  /**
   * Método para mostrar o painel de cadastro de um novo usuário
   */
  public irParaCadastro(): void {
    this.mostrarCadastro.emit({
      painel: 'cadastro'
    });
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
        .subscribe( 
            (resposta: string) => { 
              this.router.navigate(['/home']);              
             },
            (msgErroLogin: string) => { 
              this.msgErroLogin = msgErroLogin;
            }
          )   
  }

  /**
   * Cria a referência do formulário com o template
   */
  private buildFormularioLogin(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

}
