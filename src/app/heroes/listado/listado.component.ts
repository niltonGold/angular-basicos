import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = [ 'Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America' ]
  heroeBorrado: string = '';

  borrarHeroe(){
     console.log('borrando...');
     this.heroeBorrado = this.heroes.shift() || ''; /* si no hay nada me devolvera un string vacio */
     console.log(this.heroeBorrado);
  }

}


