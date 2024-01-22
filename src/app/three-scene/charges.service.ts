import { Injectable } from '@angular/core';
import { SphereGeometry } from 'three';
import { MeshBasicMaterial } from 'three';
import { Mesh } from 'three';
import { Vector3 } from 'three'; // Import Vector3 from three.js
import { GRID_X_MAX, GRID_X_MIN, GRID_Y_MAX, GRID_Y_MIN, NUMER_OF_CHARGES } from './settings';
import { k } from './PhysicalConstant';



@Injectable({
  providedIn: 'root'
})
export class ChargesService {

  chargeArr!: {mesh: Mesh, magnitude: number, velocity: Vector3, direction: Vector3, mass: number}[];
      // Add a 'mass' property



  constructor() {
    this.chargeArr = [];
    this.initCharge();
    // this.randomPosition();
    this.condensatorPosition();
  }

  initCharge() {
    for (let j = 0; j < NUMER_OF_CHARGES; j++){
      // Alternate between positive and negative charges
      const magnitude = j % 2 === 0 ? 1 : -1; // Positive for even indices, negative for odd
        const color = magnitude === 1 ? 0xff0000 : 0x0000ff; // Red for positive, Blue for negative
          this.chargeArr.push({
            mesh: this.createCharge(color),
            magnitude: magnitude,
            velocity: new Vector3(),
            direction: new Vector3(),
            mass: 1, // Set the mass property
          });
    }
  }

  createCharge(color: number) {
    const geometry = new SphereGeometry(0.1, 30, 30); // Small sphere for the ball
      const material = new MeshBasicMaterial({ color: color });
    return new Mesh(geometry,material);
  }

// Update the movement of charges in ChargesService
update() {
  for (const charge of this.chargeArr) {
    // Calculate the force acting on the charge due to other charges
    const totalForce = new Vector3(0, 0, 0); // Start with a zero vector for the total force

    for (const otherCharge of this.chargeArr) {
      if (otherCharge !== charge) {
        const rVector = otherCharge.mesh.position.clone().sub(charge.mesh.position); // Calculate relative position
        const rMagnitude = rVector.length();
        if (rMagnitude < 1) continue;

        // Calculate the force magnitude due to this charge using Coulomb's law
        const forceMagnitude = -k * charge.magnitude * otherCharge.magnitude / (rMagnitude * rMagnitude);

        // Add the force contribution from this charge to the total force
        totalForce.add(rVector.clone().normalize().multiplyScalar(forceMagnitude));
      }
    }

    // Calculate the acceleration based on the total force
    const acceleration = totalForce.divideScalar(charge.mass); // Assuming charge has mass

    // Update the velocity and position based on the calculated acceleration
    const deltaTime = 0.1; // Assuming deltaTime is defined
    charge.velocity.add(acceleration.multiplyScalar(deltaTime));
    const deltaMove = charge.velocity.clone().multiplyScalar(deltaTime);
    charge.mesh.position.add(deltaMove);
  }
}

  randomSmallChange(): number {
    return Math.random() * 0.1 - 0.05;
  }

  randomPosition() {
    let x;
    let y;

    for (const charge of this.chargeArr) {
      x = this.randomInRange(GRID_X_MIN,GRID_X_MAX);
      y = this.randomInRange(GRID_Y_MIN,GRID_Y_MAX);
      charge.mesh.position.set(x,y,0);
    }

  }


  condensatorPosition() {
    let x;
    let y;

    for (const charge of this.chargeArr) {
      if (charge.magnitude > 0){
        x = this.randomInRange(GRID_X_MIN,0 );
      } else {
        x = this.randomInRange(0,GRID_X_MAX);
      }

      y = this.randomInRange(GRID_Y_MIN,GRID_Y_MAX);
      charge.mesh.position.set(x,y,0);
    }

  }


  randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }





  getChargePositionArray(): Vector3[] {
    const vecArr: Vector3[] =  [];
    for (const charge of this.chargeArr) {
      const vec =new Vector3(charge.mesh.position.x, charge.mesh.position.y, charge.mesh.position.z);
      vecArr.push(vec);
    }
    return vecArr;
  }

  getMeshes(): Mesh[] {
    return this.chargeArr.map(charge => charge.mesh);
  }


  getChargeMagnitude (){
    return 1;
  }

}
