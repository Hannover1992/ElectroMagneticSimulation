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

  // Größe des Grids
  gridSize: number = 10;
  gridStep: number = 100; // Abstand zwischen den Punkten im Grid

  ngAfterViewInit(): void {
    // Ensure canvasRef is defined
    if (!this.canvasRef) {
      console.error('Canvas reference is not found!');
      return;
    }

    // Szene erstellen
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Orthografische Kamera erstellen
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 1000);
    camera.position.z = 500;

    // Renderer erstellen und an das Canvas binden
    const renderer = new THREE.WebGLRenderer({ canvas: this.canvasRef.nativeElement, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Kugel erstellen und positionieren
    const sphereGeometry = new THREE.CircleGeometry(20, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Blaue Farbe
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(4 * this.gridStep, 4 * this.gridStep, 0); // Position im Grid 4,4
    scene.add(sphere);

    // Render-Schleife
    const animate = () => {
      requestAnimationFrame(animate);

      // Hier könnten Sie die Logik für Bewegungen oder Interaktionen hinzufügen

      renderer.render(scene, camera);
    };
    animate();
  }
}
