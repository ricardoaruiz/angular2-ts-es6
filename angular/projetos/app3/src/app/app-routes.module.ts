import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacaoGuard } from './autenticacao-guard.service';

import { AcessoComponent } from './acesso/acesso.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AcessoComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AutenticacaoGuard ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AutenticacaoGuard
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutesModule { }
