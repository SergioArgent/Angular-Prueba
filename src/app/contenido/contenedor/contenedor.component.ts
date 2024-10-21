// Importaciones necesarias para el componente
import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';  // Servicio de GIFs

@Component({
  selector: 'app-contenedor-gifs',  // Selector para el componente contenedor
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent {
  get gifs() {
    return this.gifsService.resultados;  // Obtener resultados desde el servicio
  }

  constructor(private gifsService: GifsService) { }
}

