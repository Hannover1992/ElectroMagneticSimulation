import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls
import { GeometryService } from './geometry.service';
import { SceneService } from './scene.service';
import { CameraService } from './camera.service';
import { RendererService } from './renderer.service';
import { OrbitControlService } from './orbit-control.service';


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
    private geometryService     :GeometryService,
    private rendererService     :RendererService,
    private orbitControlService :OrbitControlService
  ){
  }





  ngAfterViewInit(): void {
    this.rendererService.initRenderer(this.canvasRef);
    this.orbitControlService.setParam();


    this.animate();
  }




  animate = () => {
    requestAnimationFrame(this.animate);
    this.geometryService.applyTransformationOnTorus();


    this.rendererService.render();  // Call this.render which checks for this.renderer
      console.log("animating");
  };


}


