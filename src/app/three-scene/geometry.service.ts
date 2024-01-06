import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class GeometryService {

  torus!:             THREE.Mesh<THREE.TorusGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap>;

  constructor(){
    this.initTorus();
  }

  initTorus() {
    const geometry  = new THREE.TorusGeometry(11,3,16,100)
    const material  = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
    this.torus      = new THREE.Mesh(geometry, material);
  }

  applyTransformationOnTorus()
  {
    this.torus.rotation.x += 0.01;
    this.torus.rotation.y += 0.005;
    this.torus.rotation.z += 0.01;
  }


}
