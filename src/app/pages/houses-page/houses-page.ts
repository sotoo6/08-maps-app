import { Component, signal } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Minimap } from "../../maps/components/minimap/minimap";

interface HouseProperty {
  id: string;
  name: string;
  description: string;
  price: number;
  lngLat: { lng: number; lat: number };
  tags: string[];
}

@Component({
  selector: 'app-houses-page',
  imports: [Minimap],
  templateUrl: './houses-page.html',
})
export class HousesPage {

  houses = signal<HouseProperty[]>([
    {
      id: uuid(),
      name: 'Mi Casa',
      description:
        'Un refugio tranquilo con vistas panorámicas al mar y jardines exuberantes.',
      price: 500_000,
      lngLat: { lng: -8.400701, lat: 43.371829 },
      tags: ['Casa', 'Centro', 'Familia'],
    },
    {
      id: uuid(),
      name: 'Emerxente',
      description:
        'Una casa luminosa y acogedora con amplias terrazas y piscina privada.',
      price: 750_000,
      lngLat: { lng: -8.360473, lat: 43.322455 },
      tags: ['Empresa', 'Practicas', 'Angular'],
    },
    {
      id: uuid(),
      name: 'Papiro',
      description:
        'Elegante propiedad con acabados de lujo y un diseño arquitectónico moderno.',
      price: 1_200_000,
      lngLat: { lng: -8.394307, lat: 43.374833 },
      tags: ['Tienda', 'Papiro', 'Mamá'],
    },
    {
      id: uuid(),
      name: 'AulaNosa',
      description:
        'Encantadora hacienda con acceso directo al lago y un entorno natural impresionante.',
      price: 950_000,
      lngLat: { lng: -8.425727, lat: 43.362265 },
      tags: ['Centro', 'DAW', 'Estudio'],
    },
  ]);

}
