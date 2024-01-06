import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RendererService } from './renderer.service';
import { OrbitControlService } from './orbit-control.service';
import { AnimationService } from './animation.service';


@Component({
  selector: 'app-three-scene',
  standalone: true,
  imports: [],
  templateUrl: './three-scene.component.html',
  styleUrls: ['./three-scene.component.css']
})


export class ThreeSceneComponent implements AfterViewInit {
  @ViewChild('myCanvas') private canvasRef!: ElementRef;  // Notice the "!" after "ElementRef"

  constructor(
    private rendererService     :RendererService,
    private orbitControlService :OrbitControlService,
    private animationService    :AnimationService
  ){}

  ngAfterViewInit(): void {
    this.rendererService.initRenderer(this.canvasRef);
    this.orbitControlService.setParam();
    this.animationService.animate();
  }

}


