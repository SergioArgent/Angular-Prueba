// Importaciones necesarias de Angular y el servicio que se usará para manejar la búsqueda
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';  // Renombrado del servicio para que refleje mejor su propósito

@Component({
  selector: 'app-buscador-gifs',  // Cambié el selector a uno más específico
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  @ViewChild('inputBusqueda') inputBusqueda!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  realizarBusqueda() {
    const termino = this.inputBusqueda.nativeElement.value;

    if (!termino.trim()) { // Validación para evitar búsquedas vacías
      return;  
    }

    this.gifsService.buscarGifs(termino);
    this.inputBusqueda.nativeElement.value = ''; // Limpiar el input después de la búsqueda
  }
}
