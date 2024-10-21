// Importaciones necesarias para el servicio
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importación del cliente HTTP

@Injectable({
  providedIn: 'root'  // Hace que este servicio esté disponible globalmente
})
export class GifsService {
  private apiKey: string = 'Jkv5X60BnDY6zqoes0FbHgLXHmPq8Hy0';  // Clave de la API
  private _historial: string[] = [];  // Almacén interno para guardar el historial de búsquedas
  public resultados: any[] = [];  // Almacén para los resultados de la búsqueda

  // Getter para obtener una copia del historial de búsquedas
  get historial() {
    return [...this._historial];  // Evitar modificaciones directas
  }

  // Constructor donde se inyecta el HttpClient
  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];  // Recuperar historial del localStorage
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];  // Recuperar resultados del localStorage
  }

  // Método para buscar GIFs
  buscarGifs(termino: string = '') {
    termino = termino.trim().toLowerCase();  // Limpiar término de búsqueda

    // Verificar si el término no está ya en el historial
    if (!this._historial.includes(termino)) {
      this._historial.unshift(termino);  // Añadir nuevo término al inicio
      this._historial = this._historial.slice(0, 12);  // Limitar a 12 elementos
      localStorage.setItem('historial', JSON.stringify(this._historial));  // Guardar historial
    }

    // Realizar solicitud a la API
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${termino}&limit=24`)
      .subscribe((resp: any) => {
        console.log(resp.data);  // Imprimir respuesta en consola
        this.resultados = resp.data;  // Almacenar resultados
        localStorage.setItem('resultados', JSON.stringify(this.resultados));  // Guardar resultados
      });
  }
}
