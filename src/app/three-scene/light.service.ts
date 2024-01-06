import { Injectable } from '@angular/core';
import { AmbientLight } from 'three'; // Import specific components

@Injectable({
  providedIn: 'root'
})
export class LightService {

  pointLight:        THREE.AmbientLight;

  constructor() {
    this.pointLight  = new AmbientLight(0xffffff);
    this.pointLight.position.set(5,5,5);
  }

}
