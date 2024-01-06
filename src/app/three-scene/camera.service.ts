import { Injectable } from '@angular/core';
import { OrthographicCamera } from 'three/src/cameras/OrthographicCamera';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  camera!:    THREE.OrthographicCamera;

  constructor() {

    const aspect  =   this.calculateRatio();   // const camera    = new THREE.OrthographicCamera(75, aspect, 0.1, 1000);
    const h       =   100; // frustum height

    this.camera = new OrthographicCamera( - h * aspect / 2, h * aspect / 2, h / 2, - h / 2, 1, 1000 );
    this.camera.position.set( - 64, - 64, 128 );
    this.camera.up.set( 0, 0, 1 ); // In our data, z is up
  }


  calculateRatio() {
    return window.innerHeight / window.innerWidth;
  }
}
