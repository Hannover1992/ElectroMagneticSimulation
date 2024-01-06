import { Injectable } from '@angular/core';
import { GeometryService } from './geometry.service';
import { RendererService } from './renderer.service';

@Injectable({
  providedIn: 'root'
})

export class AnimationService {
  constructor(
    private geometryService: GeometryService,
    private rendererService: RendererService
  ) {}

  animate = () => {
    requestAnimationFrame(this.animate);
    this.geometryService.update();  // Update the arrows to point towards the ball
    this.rendererService.render();  // Render the scene with updated positions
    console.log("Animating");
  };
}
