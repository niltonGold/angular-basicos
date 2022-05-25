import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
 
// tarea:
// Crear un módulo llamado ContadorModule
// declaraciones, y exportaciones


import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    /* aqui usualmente van los componentes */
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
