import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Usuario } from '../model/usuario.model';
import { AutenticacaoService } from '../service/autenticacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output()
  public mostrarLogin: EventEmitter<string> = new EventEmitter<string>();

  public formCadastro: FormGroup;

  public msgErroCadastro: string = undefined;

  /**
   * Construtor do componente
   * @param formBuilder 
   * @param autenticacaoService 
   */
  constructor(
    private formBuilder: FormBuilder,
    private autenticacaoService: AutenticacaoService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  /**
   * Cria a referência do formulário
   */
  private createForm(): void {
    this.formCadastro = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nomeCompleto: [''],
      nomeUsuario: ['',[Validators.required]],
      senha: ['',[Validators.required]]
    })
  }

  /**
   * Chama o painel de login
   */
  public irParaLogin(): void {
    this.mostrarLogin.emit('login');
  }

  /**
   * Realiza o cadastro de um novo usúario
   */
  public cadastrarUsuario(): void {
    if(this.formCadastro.invalid) {
      this.marcaCamposComoVisitados();
      return;
    }

    this.autenticacaoService.cadastrarUsuario(
      Usuario.buildFromFormGroup(this.formCadastro))
        .subscribe ( 
          (resposta: string) => this.irParaLogin(),
          (erro: string) => { 
            switch (erro) {
              case 'auth/email-already-in-use':
                this.msgErroCadastro = 'Usuário já cadastrado'  
                break;
              case 'auth/weak-password':
                this.msgErroCadastro = 'Senha informada é muito fraca'
                break;
              default:
                this.msgErroCadastro = 'Erro desconhecido'
                break;
            }
            console.log(erro);
            console.log(this.msgErroCadastro);
          }
        )
  }

  /**
   * Marca todos os campos do formulario como touched, para disparar
   * as validações de cada campo.
   */
  private marcaCamposComoVisitados(): void {
    Object.keys(this.formCadastro.controls).forEach( key => {
       this.formCadastro.controls[key].markAsTouched();
    })
  }

}
