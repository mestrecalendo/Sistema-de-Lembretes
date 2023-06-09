import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaLembretesComponent } from './componentes/lista-lembretes/lista-lembretes.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    CabecalhoComponent,
    ListaLembretesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
