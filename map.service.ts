import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GridConfig, GridSystem, Coordinate, Keypoint } from '../models/grid-config.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private currentCoordinate = new BehaviorSubject<Coordinate>({ x: 0, y: 0 });
  private gridConfig = new BehaviorSubject<GridConfig>(this.getDefaultConfig());
  
  public currentCoordinate$ = this.currentCoordinate.asObservable();
  public gridConfig$ = this.gridConfig.asObservable();

  private getDefaultConfig(): GridConfig {
    return {
      enabled: true,
      color: '#ff0000',
      quality: 100,
      hardness: 50,
      stacking: 1,
      system: GridSystem.INDEX_GRID_GENEST_1929,
      ringOverlay: false,
      ringCount: 5,
      ringSpacing: 100
    };
  }

  updateGridConfig(config: Partial<GridConfig>): void {
    const current = this.gridConfig.value;
    this.gridConfig.next({ ...current, ...config });
  }

  navigateToCoordinate(coordinate: Coordinate): void {
    this.currentCoordinate.next(coordinate);
    // Implementation for map navigation would go here
  }

  calculateProjection(bearing: number, distance: number): Coordinate {
    // Simple projection calculation
    const rad = bearing * (Math.PI / 180);
    const x = this.currentCoordinate.value.x + distance * Math.cos(rad);
    const y = this.currentCoordinate.value.y + distance * Math.sin(rad);
    
    return { x, y, bearing, distance };
  }
}
