import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    /* las declariciones me dicen que cosas contiene este modulo */
    declarations: [
        ContadorComponent
    ],

    /* los exports significa que cosas quiero hacer publicas y fuera de este modulo */
    exports: [
        ContadorComponent
    ],

    /* usualmente solo los modulos van en el import */
    imports: [
        CommonModule
    ]
})


export class ContadorModule {

}