import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListarFilmesComponent } from './components/filmes/listar-filmes/listar-filmes.component';
import { CadastrarFilmesComponent } from './components/filmes/cadastrar-filmes/cadastrar-filmes.component';

//importações para abrasileirar as configurações regionais
import {LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { FormsModule } from '@angular/forms';

//importação manual do módulo HTTPCliente que trata as requisições HTTP no Angular
import { HttpClientModule } from '@angular/common/http';

//importação das animações
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtualizarFilmeComponent } from './components/filmes/atualizar-filme/atualizar-filme.component';

//sweetalert
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListarFilmesComponent,
    CadastrarFilmesComponent,
    AtualizarFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [
    //codigo abrasileirador
    {provide: LOCALE_ID, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
