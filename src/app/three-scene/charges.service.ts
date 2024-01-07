import { Injectable } from '@angular/core';
import { SphereGeometry } from 'three/src/geometries/SphereGeometry';
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial';
import { Mesh } from 'three/src/objects/Mesh';
import { Vector3 } from 'three'; // Import Vector3 from three.js
import { GRID_X_MAX, GRID_X_MIN, GRID_Y_MAX, GRID_Y_MIN, NUMER_OF_CHARGES } from './settings';

@Injectable({
  providedIn: 'root'
})
export class ChargesService {

  chargeArr!: Mesh[];

  constructor() {
    this.chargeArr = [];
    this.initCharge();
    this.randomPosition();
  }

  initCharge() {
    for (let j = 0; j < NUMER_OF_CHARGES; j++){
      const charge: Mesh = this.createCharge();
      this.chargeArr.push(charge);
    }
  }

  createCharge() {
    const geometry = new SphereGeometry(0.1, 30, 30); // Small sphere for the ball
    const material = new MeshBasicMaterial({ color: 0x0000FF });
    return new Mesh(geometry, material);
  }

  update(){
    // console.log("update charge");

  }

randomPosition() {
  let x;
  let y;

  for (const charge of this.chargeArr) {
    x = randomInRange(GRID_X_MIN,GRID_X_MAX);
    y = randomInRange(GRID_Y_MIN,GRID_Y_MAX);
    charge.position.set(x,y,0);
  }

  function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
  }
}





  getChargePositionArray(): Vector3[] {
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


  getChargeMagnitude (){
    return 1;
  }

}
