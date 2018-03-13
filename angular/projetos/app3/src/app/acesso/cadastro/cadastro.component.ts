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

  constructor(
    private formBuilder: FormBuilder,
    private autenticacaoService: AutenticacaoService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.formCadastro = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nomeCompleto: [''],
      nomeUsuario: ['',[Validators.required]],
      senha: ['',[Validators.required]]
    })
  }

  public irParaLogin(): void {
    this.mostrarLogin.emit('login');
  }

  public cadastrarUsuario(): void {
    if(this.formCadastro.invalid) {
      this.marcaCamposComoVisitados();
      return;
    }

    this.autenticacaoService.cadastrarUsuario(
      Usuario.buildFromFormGroup(this.formCadastro));    
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
