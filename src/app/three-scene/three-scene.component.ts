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
    private scene!: THREE.Scene;
    private camera!: THREE.OrthographicCamera;
    private renderer!: THREE.WebGLRenderer;

  constructor(){
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    this.initCamera();
  }


  ngAfterViewInit(): void {



    this.renderer  = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement, antialias: true
    });


    this.renderer.setPixelRatio( window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth*0.98, window.innerHeight * 0.98);

    this.camera.position.setZ(30);
    this.camera.position.setX(-30);
    this.camera.position.setY(-300);

    const geometry  = new THREE.TorusGeometry(11,3,16,100)
    // const material  = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
    const material  = new THREE.MeshStandardMaterial({color: 0xFF6347});
    const torus     = new THREE.Mesh(geometry, material);


    this.scene.add(torus);
    const pointLight  = new THREE.AmbientLight(0xffffff);
    pointLight.position.set(5,5,5);
    this.scene.add(pointLight);

    const controls = new OrbitControls(this.camera, this.renderer.domElement);

    controls.addEventListener('change', this.render); // use if there is no animation loop

    controls.minDistance = 20;
    controls.maxDistance = 500;
    controls.enablePan = true;



    // Render-Schleife
    const animate = () => {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;

      // Hier könnten Sie die Logik für Bewegungen oder Interaktionen hinzufügen

      this.renderer.render(this.scene, this.camera);
      controls.update();
      // animate();
      console.log("animating");
    };
    animate();
  }


  render() {
    this.renderer.render(this.scene, this.camera);
  }


  calculateRAtio() {
    return window.innerHeight / window.innerWidth;
  }

  initCamera() {
    const aspect    =  this.calculateRAtio();   // const camera    = new THREE.OrthographicCamera(75, aspect, 0.1, 1000);
    const h = 100; // frustum height

    this.camera = new THREE.OrthographicCamera( - h * aspect / 2, h * aspect / 2, h / 2, - h / 2, 1, 1000 );
    this.camera.position.set( - 64, - 64, 128 );
    this.camera.up.set( 0, 0, 1 ); // In our data, z is up
  }

}
