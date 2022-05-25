import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    /* las declariciones me dicen que cosas contiene este modulo */
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],

    /* los exports significa que cosas quiero hacer publicas y fuera de este modulo */
    exports: [
        ListadoComponent
    ],

    /* usualmente solo los modulos van en el import */
    imports: [
        CommonModule
    ]
})


export class HeroesModule {

}