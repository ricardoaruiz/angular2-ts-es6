import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { OrderCompraSucessoComponent } from './order-compra-sucesso/order-compra-sucesso.component';

import { DescricaoReduzidaPipe } from './util/descricao-reduzida.pipe';

import { CarrinhoService } from './carrinho.service';

//Utilizado para a Internacionalização
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzidaPipe,
    OrdemCompraComponent,
    OrderCompraSucessoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    //FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ 
    { //Utilizado para a Internacionalização
      provide: LOCALE_ID, 
      useValue: 'pt-BR'
    },
    CarrinhoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
