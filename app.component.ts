import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <header class="app-header">
        <div class="header-left">
          <h1>Grid Navigation v0.1</h1>
          <span class="device-status">Device • Online</span>
        </div>
        <div class="header-right">
          <span class="time">6:08 PM</span>
          <span class="network-status">KB/s</span>
        </div>
      </header>
      
      <div class="app-content">
        <div class="controls-sidebar">
          <app-controls-panel></app-controls-panel>
        </div>
        
        <div class="map-area">
          <app-map></app-map>
        </div>
        
        <div class="right-panel">
          <app-go-to-coordinate></app-go-to-coordinate>
          <app-grid-settings></app-grid-settings>
          <app-keypoint-manager></app-keypoint-manager>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
