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
      email: ['ricardo.almendro.ruiz@gmail.com', [Validators.required, Validators.email]],
      nomeCompleto: ['Ricardo Ruiz'],
      nomeUsuario: ['rruiz',[Validators.required]],
      senha: ['123456',[Validators.required]]
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
          (msgErroCadastroUsuario: string) => { 
            this.msgErroCadastro = msgErroCadastroUsuario;
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
