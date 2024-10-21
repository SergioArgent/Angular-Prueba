import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoPageComponent } from './contenido-page/contenido-page.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ContenedorComponent } from './contenedor/contenedor.component';



@NgModule({
  declarations: [
    ContenidoPageComponent,
    BuscadorComponent,
    ContenedorComponent
  ],
  exports:[
    ContenidoPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContenidoModule { }
