import { Injectable } from '@angular/core';
import { SphereGeometry } from 'three/src/geometries/SphereGeometry';
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial';
import { Mesh } from 'three/src/objects/Mesh';
import { Vector3 } from 'three'; // Import Vector3 from three.js

@Injectable({
  providedIn: 'root'
})
export class ChargesService {

  chargeArr!: Mesh[];

  constructor() {
    this.chargeArr = [];
    this.initCharge();
    this.initOnCenter();
  }

  initCharge() {
    const charge: Mesh = this.createCharge();
    this.chargeArr.push(charge);
  }

  createCharge() {
    const geometry = new SphereGeometry(0.1, 30, 30); // Small sphere for the ball
    const material = new MeshBasicMaterial({ color: 0x0000FF });
    return new Mesh(geometry, material);
  }

  initOnCenter() {
    for (const charge of this.chargeArr) {
      charge.position.set(0, 0, 0);
    }
  }

  getChargePositionVector(): Vector3[] {
    const vecArr: Vector3[] =  [];
    for (const charge of this.chargeArr) {
      const vec =new Vector3(charge.position.x, charge.position.y, charge.position.z);
      vecArr.push(vec);
    }
    return vecArr;
  }

  getShapes() {
    return this.chargeArr;
  }

}
