import { Injectable } from '@angular/core';
import { GeometryService } from './geometry.service';
import { RendererService } from './renderer.service';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor(
    private geometryService     :GeometryService,
    private rendererService     :RendererService
  ) {}

  animate = () => {
    requestAnimationFrame(this.animate);
    this.geometryService.applyTransformationOnTorus();


    this.rendererService.render();  // Call this.render which checks for this.renderer
    console.log("animating");
  };

}
