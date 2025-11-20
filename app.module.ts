import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { ControlsPanelComponent } from './components/controls-panel/controls-panel.component';
import { GoToCoordinateComponent } from './components/go-to-coordinate/go-to-coordinate.component';
import { GridSettingsComponent } from './components/grid-settings/grid-settings.component';
import { KeypointManagerComponent } from './components/keypoint-manager/keypoint-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ControlsPanelComponent,
    GoToCoordinateComponent,
    GridSettingsComponent,
    KeypointManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
