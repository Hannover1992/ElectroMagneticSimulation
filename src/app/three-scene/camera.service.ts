import { Injectable } from '@angular/core';
import { OrthographicCamera } from 'three/src/cameras/OrthographicCamera';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  camera!:    THREE.OrthographicCamera;

constructor() {
    const aspect = this.calculateRatio();
    const h = 30; // Frustum height

    this.camera = new OrthographicCamera(-h * aspect , h * aspect , h / 2, -h / 2, 1, 1000);

    // Position the camera above the grid, looking down
    this.camera.position.set(0, 0, 100); // Adjust 100 to whatever height you want above the grid
    this.camera.lookAt(0, 0, 0); // Looking down at the center of the grid
  }


  calculateRatio() {
    return window.innerHeight / window.innerWidth;
  }
}
