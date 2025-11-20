export interface GridConfig {
  enabled: boolean;
  color: string;
  quality: number;
  hardness: number;
  stacking: number;
  system: GridSystem;
  ringOverlay: boolean;
  ringCount: number;
  ringSpacing: number;
}

export enum GridSystem {
  INDEX_GRID_GENEST_1929 = 'genest-1929',
  IA = 'ia',
  EATING = 'eating',
  NOTHING = 'nothing'
}

export interface Coordinate {
  x: number;
  y: number;
  bearing?: number;
  distance?: number;
}

export interface Keypoint {
  id: string;
  name: string;
  coordinate: Coordinate;
  color: string;
  createdAt: Date;
}
