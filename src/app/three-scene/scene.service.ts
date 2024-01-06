import { Injectable } from '@angular/core';
import { GeometryService } from './geometry.service';
import { LightService } from './light.service';
import { Color, GridHelper, Scene } from 'three/src/Three';
import { GRID_X, GRID_Y } from './settings';

@Injectable({
  providedIn: 'root'
})

export class SceneService {
  scene!:     Scene;

  constructor(
    private geometryService:  GeometryService,
    private lightService:     LightService
  ) {
    this.scene            = new Scene();
    this.scene.background = new Color(0x000000);
    this.addToScene();
  }


  addToScene() {
    this.scene.add(...this.geometryService.getAllShapes()); // Add the central ball
    this.scene.add(this.lightService.pointLight);
    this.addGridHelper();
  }

  addGridHelper(){
    const gridHelper = new GridHelper(GRID_X,GRID_Y);
    this.scene.add(gridHelper);
  }

}
