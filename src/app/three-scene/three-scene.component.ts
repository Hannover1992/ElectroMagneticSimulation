import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls
import { GeometryService } from './geometry.service';
import { SceneService } from './scene.service';
import { CameraService } from './camera.service';


@Component({
  selector: 'app-three-scene',
  standalone: true,
  imports: [],
  templateUrl: './three-scene.component.html',
  styleUrls: ['./three-scene.component.css']
})


export class ThreeSceneComponent implements AfterViewInit {
  @ViewChild('myCanvas') private canvasRef!: ElementRef;  // Notice the "!" after "ElementRef"

  private renderer!:  THREE.WebGLRenderer;
  controls!: OrbitControls;

  constructor(
    private geometryService :GeometryService,
    private sceneService    :SceneService,
    private cameraService   :CameraService
  ){
    this.preInitRenderer();
  }



  preInitRenderer(){
    this.renderer  = new THREE.WebGLRenderer();
  }


  ngAfterViewInit(): void {
    this.postInitRender();
    this.postInitControl();

    this.animate();
  }

  postInitControl() {
    this.initControls();

  }

  initControls() {
    this.controls = new OrbitControls(this.cameraService.camera, this.renderer.domElement);
    this.controls.addEventListener('change', this.render); // use if there is no animation loop
    this.controls.minDistance = 20;
    this.controls.maxDistance = 500;
    this.controls.enablePan = true;
  }

  postInitRender() {
    this.renderer  = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement, antialias: true
    });

    this.renderer.setPixelRatio( window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth*0.98, window.innerHeight * 0.98);
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    this.geometryService.applyTransformationOnTorus();


    this.render();  // Call this.render which checks for this.renderer
      console.log("animating");
  };

  render() {
    if(this.renderer){
      this.renderer.render(this.sceneService.scene, this.cameraService.camera);
    }
  }

}


