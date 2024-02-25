import { Injectable } from '@angular/core';
import { GeometryService } from './geometry.service';
import { LightService } from './light.service';
import { Color, Scene } from 'three';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})

export class SceneService {
  scene!:     Scene;

  constructor(
    private geometryService:  GeometryService,
    private lightService:     LightService,
    private settingsService  :SettingsService,
  ) {
    this.scene            = new Scene();
    this.scene.background = new Color(0x000000);
    this.addToScene();

      this.settingsService.numberOfChargesSource.subscribe(newNrOfCharges =>{
    this.scene            = new Scene();
    this.scene.background = new Color(0x000000);
    this.addToScene();
      });
  }


  addToScene() {
    this.scene.add(...this.geometryService.getAllShapes()); // Add the central ball
    this.scene.add(this.lightService.pointLight);
  }

}
