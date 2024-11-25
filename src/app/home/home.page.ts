import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  locations: { latitude: number; longitude: number; date: Date }[] = [];

  constructor() { }

  // Función para registrar ubicación
  async getLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      console.log(position);
      const location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        date: new Date()
      };
      this.locations.push(location); // Agregar la nueva ubicación a la lista
    } catch (e) {
      console.log('Error getting the location', e);
    }
  }

  // Función para borrar todas las ubicaciones
  deleteLocations() {
    this.locations = []; // Vaciar la lista de ubicaciones
  }
}

