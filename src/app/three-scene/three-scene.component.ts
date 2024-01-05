import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-scene',
  standalone: true,
  imports: [],
  templateUrl: './three-scene.component.html',
  styleUrls: ['./three-scene.component.css']
})
export class ThreeSceneComponent implements AfterViewInit {
  @ViewChild('myCanvas') private canvasRef!: ElementRef;  // Notice the "!" after "ElementRef"

  ngAfterViewInit(): void {

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const aspect    = window.innerWidth / window.innerHeight;
    const camera    = new THREE.OrthographicCamera(75, aspect, 0.1, 1000);

    const renderer  = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement, antialias: true
    });


    renderer.setPixelRatio( window.devicePixelRatio);
    renderer.setSize(window.innerWidth*0.98, window.innerHeight * 0.98);

    camera.position.setZ(30);
    camera.position.setX(-30);
    camera.position.setY(-300);

    const geometry  = new THREE.TorusGeometry(11,3,16,100)
    const material  = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
    const torus     = new THREE.Mesh(geometry, material);

    scene.add(torus);

    // Render-Schleife
    const animate = () => {
      requestAnimationFrame(animate);

      torus.rotation.x = +0.01;
      torus.rotation.y = +0.01;
      torus.rotation.z = +0.01;

      // Hier könnten Sie die Logik für Bewegungen oder Interaktionen hinzufügen

      renderer.render(scene, camera);
      // animate();
    };
    animate();
  }
}
