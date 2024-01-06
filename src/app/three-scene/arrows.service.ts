import { Injectable } from '@angular/core';
import { Mesh } from 'three/src/objects/Mesh';
import { ChargesService } from './charges.service';
import { GRID_X, GRID_Y } from './settings';
import { Vector3 } from 'three/src/math/Vector3';
import { ArrowHelper } from 'three/src/Three';

@Injectable({
  providedIn: 'root'
})
export class ArrowsService{

  arrows: ArrowHelper[] = []; // Arrows pointing to the ball

  constructor(
    private charges:  ChargesService
  ){
    this.initArrows();
  }


  initArrows() {
    // Clear existing arrows
    this.arrows = [];

    // Calculate spacing based on grid size
    const spacingX = 1;
    const spacingY = 1;

    for(let i = -GRID_X/2; i <= GRID_X/2; i += spacingX) {
      for(let j = -GRID_Y/2; j <= GRID_Y/2; j += spacingY) {
        const arrow = new ArrowHelper(new Vector3(0, 0, 0), new Vector3(i, 0, j), 4, 0xff0000);
        this.arrows.push(arrow);
      }
    }
  }

  updateArrows() {

    const chargePositionVector = this.charges.getChargePositionVector();
    const position = chargePositionVector[0];

    for (const arrow of this.arrows) {
      arrow.lookAt(position);
    }
  }


  getShapes() {
    return this.arrows;
  }


}
