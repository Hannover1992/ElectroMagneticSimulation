import { Injectable } from '@angular/core';
import { ConeGeometry, Mesh, MeshNormalMaterial, Vector3 } from 'three';
import { ChargesService } from './charges.service';
import { GRID_X, GRID_Y } from './settings';

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
    const arrowRadius = 0.1; // Radius of the arrow base
    const arrowGeometry = new ConeGeometry(arrowRadius, arrowHeight, 8); // Create the geometry once

    for(let i = -GRID_X/2; i <= GRID_X/2; i += spacingX) {
      for(let j = -GRID_Y/2; j <= GRID_Y/2; j += spacingY) {
        const material = new MeshNormalMaterial();
        const arrow = new Mesh(arrowGeometry, material);
        arrow.position.set(i, 1, j);
        this.arrows.push(arrow);
      }
    }
  }

  updateArrows(){
    const chargePositionVector = this.charges.getChargePositionVector();
    const position = chargePositionVector[0];

    const positionVector = new Vector3(position.x,-100,position.y)

    for (const arrow of this.arrows) {
      // arrow.lookAt(position);
      arrow.lookAt(positionVector);
    }

  }

  getShapes() {
    return this.arrows;
  }
}
