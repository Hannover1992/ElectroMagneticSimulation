import { Injectable } from '@angular/core';
import { TorusGeometry } from 'three/src/geometries/TorusGeometry';
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial';
import { Mesh } from 'three/src/objects/Mesh';

@Injectable({
  providedIn: 'root'
})
export class GeometryService {

  torus!:             THREE.Mesh<THREE.TorusGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap>;

  constructor(){
    this.initTorus();
  }

  initTorus() {
    const geometry  = new TorusGeometry(11,3,16,100)
    const material  = new MeshBasicMaterial({color: 0xFF6347, wireframe: true});
    this.torus      = new Mesh(geometry, material);
  }

  applyTransformationOnTorus()
  {
    this.torus.rotation.x += 0.01;
    this.torus.rotation.y += 0.005;
    this.torus.rotation.z += 0.01;
  }


}
