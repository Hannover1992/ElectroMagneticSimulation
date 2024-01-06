import { Injectable, ElementRef} from '@angular/core';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { CameraService } from './camera.service';
import { SceneService } from './scene.service';

@Injectable({
  providedIn: 'root'
})
export class RendererService {

  private renderer!:  WebGLRenderer;

  constructor(
    private sceneService    :SceneService,
    private cameraService   :CameraService,

  ) {
    this.renderer  =new WebGLRenderer();
  }

  render() {
    if(this.renderer){
      this.renderer.render(this.sceneService.scene, this.cameraService.camera);
    }
  }

  initRenderer(canvas: ElementRef<HTMLCanvasElement>){
    this.renderer  = new WebGLRenderer({
      canvas: canvas.nativeElement, antialias: true
    });

    this.renderer.setSize(window.innerWidth*0.98, window.innerHeight * 0.98);
  }

  getDom(): HTMLElement {
    return this.renderer.domElement
  }
}
