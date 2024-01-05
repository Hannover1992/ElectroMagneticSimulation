import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls


@Component({
  selector: 'app-three-scene',
  standalone: true,
  imports: [],
  templateUrl: './three-scene.component.html',
  styleUrls: ['./three-scene.component.css']
})

export class ThreeSceneComponent implements AfterViewInit {
  @ViewChild('myCanvas') private canvasRef!: ElementRef;  // Notice the "!" after "ElementRef"

  private scene!:     THREE.Scene;
  torus!:             THREE.Mesh<THREE.TorusGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap>;
  pointLight!:        THREE.AmbientLight;

  private camera!:    THREE.OrthographicCamera;

  private renderer!:  THREE.WebGLRenderer;

  controls!: OrbitControls;


  constructor(){
    this.initTorus();
    this.initLight();

    this.initScene();

    this.initCamera();
    this.preInitRenderer();
  }


  initTorus() {
    const geometry  = new THREE.TorusGeometry(11,3,16,100)
    const material  = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
    this.torus      = new THREE.Mesh(geometry, material);
  }

  initLight(){
    this.pointLight  = new THREE.AmbientLight(0xffffff);
    this.pointLight.position.set(5,5,5);
  }

  initScene() {
    this.scene            = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    this.addToScene();
  }

  addToScene() {
    this.scene.add(this.torus);
    this.scene.add(this.pointLight);
  }


  initCamera() {
    const aspect  =   calculateRatio();   // const camera    = new THREE.OrthographicCamera(75, aspect, 0.1, 1000);
    const h       =   100; // frustum height

    this.camera = new THREE.OrthographicCamera( - h * aspect / 2, h * aspect / 2, h / 2, - h / 2, 1, 1000 );
    this.camera.position.set( - 64, - 64, 128 );
    this.camera.up.set( 0, 0, 1 ); // In our data, z is up
  }

  preInitRenderer(){
    this.renderer  = new THREE.WebGLRenderer();
  }


  ngAfterViewInit(): void {

    this.postInitRender();
    this.postInitControl();


    // Render-Schleife
    this.animate();
  }

  postInitControl() {
    this.initControls();

    this.controls.addEventListener('change', this.render); // use if there is no animation loop
    this.controls.minDistance = 20;
    this.controls.maxDistance = 500;
    this.controls.enablePan = true;
  }


  initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
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

    this.torus.rotation.x += 0.01;
    this.torus.rotation.y += 0.005;
    this.torus.rotation.z += 0.01;

    this.render();  // Call this.render which checks for this.renderer
      console.log("animating");
  };


  render() {
    if(this.renderer){
      this.renderer.render(this.scene, this.camera);
    }
  }


}

export function calculateRatio() {
  return window.innerHeight / window.innerWidth;
}

