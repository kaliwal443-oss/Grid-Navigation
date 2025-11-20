import { Component } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-controls-panel',
  template: `
    <div class="controls-panel">
      <div class="control-section">
        <h3>Device</h3>
        <button class="control-btn" (click)="toggleSettings()">Settings</button>
        <button class="control-btn" [class.active]="ringOverlay" (click)="toggleRingOverlay()">
          Ring Overlay
        </button>
        <button class="control-btn" (click)="importImage()">Import Image</button>
      </div>

      <div class="control-section">
        <h3>Map Display</h3>
        <button class="control-btn">Raw View</button>
        <button class="control-btn">Remove View</button>
        <button class="control-btn">Remove Offline Maps</button>
      </div>

      <div class="control-section">
        <h3>Projection System</h3>
        <div class="projection-controls">
          <div class="input-group">
            <label>Bearing (°)</label>
            <input type="number" [(ngModel)]="bearing" min="0" max="360">
          </div>
          <div class="input-group">
            <label>Distance (m)</label>
            <input type="number" [(ngModel)]="distance" min="0">
          </div>
          <button class="control-btn" (click)="calculateProjection()">Calculate</button>
        </div>
      </div>

      <div class="control-section">
        <h3>Map Systems</h3>
        <button class="control-btn">Covid Systems</button>
        <button class="control-btn">Indian Zone</button>
        <button class="control-btn">Map Generation</button>
        <button class="control-btn">Open Up</button>
        <button class="control-btn">Head Up</button>
        <button class="control-btn">Free</button>
      </div>
    </div>
  `,
  styleUrls: ['./controls-panel.component.css']
})
export class ControlsPanelComponent {
  ringOverlay = false;
  bearing = 7;
  distance = 100;

  constructor(private mapService: MapService) {}

  toggleSettings(): void {
    console.log('Settings toggled');
  }

  toggleRingOverlay(): void {
    this.ringOverlay = !this.ringOverlay;
    this.mapService.updateGridConfig({ ringOverlay: this.ringOverlay });
  }

  importImage(): void {
    // Implementation for image import
    console.log('Import image functionality');
  }

  calculateProjection(): void {
    const projected = this.mapService.calculateProjection(this.bearing, this.distance);
    console.log('Projected coordinate:', projected);
  }
}
