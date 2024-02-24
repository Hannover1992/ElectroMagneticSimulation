import { Injectable } from '@angular/core';
import { OrthographicCamera } from 'three';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  camera: OrthographicCamera;

  constructor() {
    const aspect = this.calculateRatio();
    const h = 60; // Frustum height

    this.camera = new OrthographicCamera(-h * aspect / 2, h * aspect / 2, h / 2, -h / 2, 1, 1000);

    // Position the camera to look slightly from the side and from above
    this.camera.position.set(100, 50, 100); // Adjust these values as needed
    this.camera.lookAt(0, 0, 0); // Looking down at the center of the grid
  }

  calculateRatio() {
    return window.innerWidth / window.innerHeight;
  }
}
