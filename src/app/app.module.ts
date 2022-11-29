import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { BarraDeNavegacionComponent } from './barra-de-navegacion/barra-de-navegacion.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    ScrollToTopComponent,
    BarraDeNavegacionComponent,
    FormularioContactoComponent
  ],
  imports: [
    BrowserModule, FormsModule,
  
    ReactiveFormsModule,
       
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  providers: [],
  bootstrap: [AppComponent]

 
})
export class AppModule { }
