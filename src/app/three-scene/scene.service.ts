import { Injectable } from '@angular/core';
import { GeometryService } from './geometry.service';
import { LightService } from './light.service';
import { Color, Scene } from 'three/src/Three';

@Injectable({
  providedIn: 'root'
})
export class SceneService {
  scene!:     THREE.Scene;

  constructor(
    private geometryService:  GeometryService,
    private lightService:     LightService
  ) {
    this.scene            = new Scene();
    this.scene.background = new Color(0x000000);
    this.addToScene();
  }


  addToScene() {
    this.scene.add(this.geometryService.torus);
    this.scene.add(this.lightService.pointLight);
  }
}
