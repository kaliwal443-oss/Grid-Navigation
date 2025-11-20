import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Keypoint, Coordinate } from '../models/grid-config.model';

@Injectable({
  providedIn: 'root'
})
export class KeypointService {
  private keypoints = new BehaviorSubject<Keypoint[]>([]);
  public keypoints$ = this.keypoints.asObservable();

  addKeypoint(name: string, coordinate: Coordinate, color: string = '#ff0000'): void {
    const newKeypoint: Keypoint = {
      id: this.generateId(),
      name,
      coordinate,
      color,
      createdAt: new Date()
    };

    const current = this.keypoints.value;
    this.keypoints.next([...current, newKeypoint]);
  }

  removeKeypoint(id: string): void {
    const current = this.keypoints.value;
    this.keypoints.next(current.filter(kp => kp.id !== id));
  }

  updateKeypoint(id: string, updates: Partial<Keypoint>): void {
    const current = this.keypoints.value;
    const updated = current.map(kp => 
      kp.id === id ? { ...kp, ...updates } : kp
    );
    this.keypoints.next(updated);
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
