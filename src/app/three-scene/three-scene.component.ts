import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls
import { GeometryService } from './geometry.service';
import { SceneService } from './scene.service';
import { CameraService } from './camera.service';
import { RendererService } from './renderer.service';


@Component({
  selector: 'app-three-scene',
  standalone: true,
  imports: [],
  templateUrl: './three-scene.component.html',
  styleUrls: ['./three-scene.component.css']
})


export class ThreeSceneComponent implements AfterViewInit {
  @ViewChild('myCanvas') private canvasRef!: ElementRef;  // Notice the "!" after "ElementRef"

  controls!: OrbitControls;

  constructor(
    private geometryService :GeometryService,
    private sceneService    :SceneService,
    private cameraService   :CameraService,
    private rendererService :RendererService
  ){
  }





  ngAfterViewInit(): void {
    this.rendererService.initRenderer(this.canvasRef);

    this.postInitControl();

    this.animate();
  }

  postInitControl() {
    this.initControls();

  }

  initControls() {
    this.controls = new OrbitControls(this.cameraService.camera, this.rendererService.getDom());
    this.controls.addEventListener('change', this.render); // use if there is no animation loop
    this.controls.minDistance = 20;
    this.controls.maxDistance = 500;
    this.controls.enablePan = true;
  }


  animate = () => {
    requestAnimationFrame(this.animate);
    this.geometryService.applyTransformationOnTorus();


    this.render();  // Call this.render which checks for this.renderer
      console.log("animating");
  };


}


