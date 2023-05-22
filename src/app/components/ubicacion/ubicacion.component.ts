import { Component } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent {
  latitude?: number;
  longitude?: number;

  constructor(private geolocation: Geolocation) {}

  getLocation() {
    const options: GeolocationOptions = {
      enableHighAccuracy: true,
      timeout: 1000,
      maximumAge: 0
    };

    this.geolocation.getCurrentPosition(options).then((resp: Geoposition) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.copyToClipboard(`${this.latitude} ${this.longitude}`);
    }).catch((error) => {
      console.log('Error al obtener la ubicación', error);
    });
  }

  copyToClipboard(text: string) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}
