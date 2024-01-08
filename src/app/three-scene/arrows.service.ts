import { Injectable } from '@angular/core';
import { ConeGeometry, Mesh, MeshNormalMaterial, Vector3 } from 'three';
import { ChargesService } from './charges.service';
import { GRID_X_MIN, GRID_X_MAX, GRID_Y_MIN, GRID_Y_MAX, GRID_Z_MIN, GRID_Z_MAX} from './settings';
import { k } from './PhysicalConstant';

@Injectable({
  providedIn: 'root'
})
export class ArrowsService {
  arrows: { arrow: Mesh, fieldMagnitude: number, fieldDirection: Vector3 }[] = []; // Array to store arrow meshes and corresponding field values

  constructor(private charges: ChargesService) {
    this.initArrows();
  }

  initArrows() {
    const spacingX = 1;
    const spacingY = 1;
    const spacingZ = 1;

    const arrowHeight = 1; // Height of the arrow
    const arrowRadius = 0.04; // Radius of the arrow base
    const arrowGeometry = new ConeGeometry(arrowRadius, arrowHeight, 8); // Create the geometry once

    for (let i = GRID_X_MIN ; i <= GRID_X_MAX; i += spacingX) {
      for (let j = GRID_Y_MIN; j <= GRID_Y_MAX; j += spacingY) {
        for (let k = GRID_Z_MIN; k <= GRID_Z_MAX; k+=spacingZ){
          const material = new MeshNormalMaterial();
          const arrow = new Mesh(arrowGeometry, material);
          arrow.position.set(i, j, k);
          this.arrows.push({ arrow, fieldMagnitude: 0, fieldDirection: new Vector3() });
        }
      }
    }
  }

  update() {
    for (const arrowData of this.arrows) {
      const arrow = arrowData.arrow;
      const totalEField = new Vector3(0, 0, 0); // Start with a zero vector for the total electric field

      for (const charge of this.charges.chargeArr) {
        const chargePosition = charge.mesh.position;
        const chargeMagnitude = charge.magnitude;

        const rVector = arrow.position.clone().sub(chargePosition); // Calculate relative position
        const rMagnitude = rVector.length();
        if (rMagnitude < 1) continue;
        const rUnitVector = rVector.clone().normalize(); // Unit vector in the direction of the field

        // Calculate electric field magnitude due to this charge
        const EFieldMagnitude = k * chargeMagnitude / (rMagnitude * rMagnitude);

        // Add the field contribution from this charge to the total field
        totalEField.add(rUnitVector.multiplyScalar(EFieldMagnitude));
      };

      // Orient the arrow along the total electric field vector
      arrow.lookAt(totalEField.add(arrow.position));

      // Optional: Scale the arrow length based on the electric field magnitude
      // arrow.scale.setScalar(Math.abs(totalEField.length() * 0.0000000003));

      // Store the field magnitude and direction for the arrow
      arrowData.fieldMagnitude = totalEField.length();
      arrowData.fieldDirection = totalEField.clone();
    }
  }

  getShapes() {
    return this.arrows.map(arrowData => arrowData.arrow);
  }
}










