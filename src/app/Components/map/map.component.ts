import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: '<div id="map"></div>',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map: L.Map;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // Create map
    this.map = L.map('map').setView([51.505, -0.09], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(this.map);

    // Add a simple marker
    L.marker([51.505, -0.09])
      .addTo(this.map)
      .bindPopup('Grid Navigation Started!')
      .openPopup();

    // Add simple grid lines (demo)
    this.addDemoGrid();
  }

  private addDemoGrid(): void {
    const bounds = this.map.getBounds();
    
    // Add vertical grid lines
    for (let lng = bounds.getWest(); lng <= bounds.getEast(); lng += 0.01) {
      L.polyline([
        [bounds.getSouth(), lng],
        [bounds.getNorth(), lng]
      ], { color: 'red', opacity: 0.5, weight: 1 }).addTo(this.map);
    }

    // Add horizontal grid lines
    for (let lat = bounds.getSouth(); lat <= bounds.getNorth(); lat += 0.01) {
      L.polyline([
        [lat, bounds.getWest()],
        [lat, bounds.getEast()]
      ], { color: 'red', opacity: 0.5, weight: 1 }).addTo(this.map);
    }
  }
}
