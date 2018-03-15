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
  public mostrarLogin: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public animarEstadoErro: EventEmitter<void> = new EventEmitter<void>();

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
      senha: ['',[Validators.required, Validators.minLength(6)]]
    })
  }

  /**
   * Chama o painel de login
   */
  public irParaLogin(): void {
    this.mostrarLogin.emit({
      painel : 'login', 
      email: this.formCadastro.controls['email'].value
    });
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
            this.animarEstadoErro.emit();
          }
        )
  }

  /**
   * Indica se o botão de confirmar cadastro deve estar habilitado ou não.
   */
  public isBotaoCadastroHabilitado(): boolean {    

    let campos: string[] = Object.keys(this.formCadastro.controls);

    for(let i=0; i<campos.length; i++) {
      if (this.formCadastro.controls[campos[i]].invalid) return false;
    }

    return true;
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
