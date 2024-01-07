import { Injectable } from '@angular/core';
import { ConeGeometry, Mesh, MeshNormalMaterial, Vector3 } from 'three';
import { ChargesService } from './charges.service';
import { GRID_X_MIN, GRID_X_MAX, GRID_Y_MIN, GRID_Y_MAX} from './settings';

@Injectable({
  providedIn: 'root'
})
export class ArrowsService {
  arrows: Mesh[] = []; // Array to store arrow meshes

  constructor(private charges: ChargesService) {
    this.initArrows();
  }

  initArrows() {
    const spacingX = 1;
    const spacingY = 1;
    const arrowHeight = 1; // Height of the arrow
    const arrowRadius = 0.04; // Radius of the arrow base
    const arrowGeometry = new ConeGeometry(arrowRadius, arrowHeight, 8); // Create the geometry once

    for (let i = GRID_X_MIN ; i <= GRID_X_MAX; i += spacingX) {
      for (let j = GRID_Y_MIN; j <= GRID_Y_MAX; j += spacingY) {
        const material = new MeshNormalMaterial();
        const arrow = new Mesh(arrowGeometry, material);
        arrow.position.set(i, j, 0);
        this.arrows.push(arrow);
      }
    }
  }

update() {
  const chargePositionArray = this.charges.getChargePositionArray();
  const chargePosition: Vector3 = chargePositionArray[0]; // Assuming single charge

  // Correct this line to fetch or define the actual charge magnitude
  const chargeMagnitude = this.charges.getChargeMagnitude(); // This method should return the magnitude of the charge

  for (const arrow of this.arrows) {

    const rVector = arrow.position.clone().sub(chargePosition); // Calculate relative position
    const rMagnitude = rVector.length();

    // Calculate electric field magnitude
    const EFieldMagnitude: number = chargeMagnitude / rMagnitude;

    // Calculate electric field direction
    const EFieldDirection: Vector3 = rVector.normalize().multiplyScalar(EFieldMagnitude);

    // Orient the arrow along the electric field vector
    arrow.lookAt(EFieldDirection.add(arrow.position)); // Add the position to get the absolute world position for lookAt

    // Optional: Scale the arrow length based on the electric field magnitude
    arrow.scale.setScalar(Math.abs(EFieldMagnitude));
  }

}

  getShapes() {
    return this.arrows;
  }
}
