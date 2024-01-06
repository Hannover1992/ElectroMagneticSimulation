import { Injectable } from '@angular/core';
import { Mesh } from 'three/src/objects/Mesh';
import { ChargesService } from './charges.service';

@Injectable({
  providedIn: 'root'
})
export class ArrowsService{

  arrows: Mesh[] = []; // Arrows pointing to the ball

  constructor(
    private charges:  ChargesService
  ){
    this.initArrows();
  }


  initArrows() {
    // Initialize your arrows here, perhaps using cones or cylinders and lines
    // Position them throughout the XZ plane and store them in this.arrows
  }

  updateArrows() {

    const chargePositionVector = this.charges.getChargePositionVector();

    for (const arrow of this.arrows) {
      arrow.lookAt(chargePositionVector);
    }
  }


  getShapes() {
    return this.arrows;
  }


}
