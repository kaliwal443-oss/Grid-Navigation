import { Component } from '@angular/core';

@Component({
  selector: 'app-controls-panel',
  template: `
    <div class="controls-panel">
      <div class="section">
        <h3>Device</h3>
        <button class="btn">Settings</button>
        <button class="btn">Ring Overlay</button>
        <button class="btn">Import Image</button>
      </div>

      <div class="section">
        <h3>Go to Coordinate</h3>
        <div class="input-group">
          <label>Latitude:</label>
          <input type="number" [(ngModel)]="latitude" placeholder="51.505">
        </div>
        <div class="input-group">
          <label>Longitude:</label>
          <input type="number" [(ngModel)]="longitude" placeholder="-0.09">
        </div>
        <button class="btn" (click)="goToCoordinate()">Navigate</button>
      </div>

      <div class="section">
        <h3>Grid Settings</h3>
        <div class="input-group">
          <label>Grid Color:</label>
          <input type="color" [(ngModel)]="gridColor" value="#ff0000">
        </div>
        <div class="input-group">
          <label>Grid Size:</label>
          <input type="range" [(ngModel)]="gridSize" min="0.001" max="0.1" step="0.001" value="0.01">
          <span>{{gridSize}}</span>
        </div>
      </div>

      <div class="section">
        <h3>Keypoint Manager</h3>
        <p>No saved keypoints</p>
        <button class="btn">Add Keypoint</button>
      </div>
    </div>
  `,
  styleUrls: ['./controls-panel.component.css']
})
export class ControlsPanelComponent {
  latitude = 51.505;
  longitude = -0.09;
  gridColor = '#ff0000';
  gridSize = 0.01;

  goToCoordinate(): void {
    console.log('Navigating to:', this.latitude, this.longitude);
    alert(`Would navigate to: ${this.latitude}, ${this.longitude}`);
  }
}
