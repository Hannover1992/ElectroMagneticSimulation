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
    const spacingX = GRID_X / 10;
    const spacingY = GRID_Y / 10;

    for(let i = 0; i <= GRID_X; i += spacingX) {
      for(let j = 0; j <= GRID_Y; j += spacingY) {
        const arrow = new ArrowHelper(new Vector3(0, 1, 0), new Vector3(i, 0, j), 1, 0xff0000);
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
