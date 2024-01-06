import { Injectable } from '@angular/core';
import { CameraService } from './camera.service';
import { RendererService } from './renderer.service';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Vector3 } from 'three';

@Injectable({
  providedIn: 'root'
})
export class OrbitControlService {
  controls!: OrbitControls;

  constructor(
    private cameraService: CameraService,
    private rendererService: RendererService
  ) {
    this.addKeyboardListeners();
  }

  setupControl() {
    this.controls = new OrbitControls(this.cameraService.camera, this.rendererService.getDom());
    this.controls.minDistance = 20;
    this.controls.maxDistance = 500;
    this.controls.enablePan = true;
    this.controls.addEventListener('change', this.rendererService.render); // use if there is no animation loop
  }

  addKeyboardListeners() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (event: KeyboardEvent) => {
    const speed = 1; // Speed of the camera movement
    const direction = new Vector3();
    this.cameraService.camera.getWorldDirection(direction);


    this.rendererService.render(); // Update the rendering after moving the camera
  }
}
