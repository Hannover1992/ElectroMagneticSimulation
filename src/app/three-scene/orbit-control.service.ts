import { Injectable } from '@angular/core';
import { CameraService  } from './camera.service';
import { RendererService} from './renderer.service';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Injectable({
  providedIn: 'root'
})
export class OrbitControlService {
  controls!: OrbitControls;

  constructor(
    private cameraService  :  CameraService,
    private rendererService:  RendererService  ) {
      this.controls = new OrbitControls(this.cameraService.camera, this.rendererService.getDom());
    }

    addLisiter(){
      this.controls.addEventListener('change', this.rendererService.render); // use if there is no animation loop
    };

  setParam() {
    this.controls.minDistance = 20;
    this.controls.maxDistance = 500;
    this.controls.enablePan = true;

  }

  setupContro(){
    this.addLisiter();
    this.setParam();
  }

}
