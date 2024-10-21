// Importaciones necesarias para la funcionalidad del componente
import { Component } from '@angular/core';
import { GifsService } from '../../contenido/services/gifs.service';  // Servicio para manejar la lógica de los GIFs

@Component({
  selector: 'app-sidebar',  // Selector que identifica este componente en la aplicación
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Propiedad para almacenar la categoría seleccionada
  categoriaSeleccionada: string | null = null;

  // Getter para obtener el historial de búsquedas almacenado en el servicio
  get historial() {
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsService) {}

  // Método para realizar una búsqueda cuando se selecciona un término del historial
  realizarBusqueda(termino: string) {
    this.gifsService.buscarGifs(termino);
    this.categoriaSeleccionada = termino; // Actualizar la categoría seleccionada
  }
}

