import { Injectable } from '@angular/core';
import { SphereGeometry } from 'three/src/geometries/SphereGeometry';
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial';
import { Mesh } from 'three/src/objects/Mesh';
import { Vector3 } from 'three'; // Import Vector3 from three.js

@Injectable({
  providedIn: 'root'
})
export class ChargesService {

  charge!: Mesh;

  constructor() {
    this.initCharge();
    this.initOnCenter();
  }

  initCharge() {
    const geometry = new SphereGeometry(0.1, 30, 30); // Small sphere for the ball
    const material = new MeshBasicMaterial({ color: 0x0000FF });
    this.charge = new Mesh(geometry, material);
  }

  initOnCenter() {
    this.charge.position.set(0, 0, 0);
  }

  getChargePositionVector(): Vector3 {
    return new Vector3(this.charge.position.x, this.charge.position.y, this.charge.position.z);
  }


  getShapes() {
    return this.charge;
  }

}
