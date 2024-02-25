import { Injectable } from '@angular/core';
import { Mesh } from 'three';
import { ChargesService } from './charges.service';
import { ArrowsService } from './arrows.service';
import { ArrowHelper } from 'three';


@Injectable({
  providedIn: 'root'
})
export class GeometryService {
  shapes!: (Mesh | ArrowHelper)[];

  constructor(
    private arrows  :ArrowsService,
    private charges  :ChargesService,
  ) {
      this.shapes = [];
      this.initAllShapes();
  }

  update(){
    this.arrows.update();
    this.charges.update();
  }


  initAllShapes(){
    this.shapes = [
      ...this.arrows.getShapes(),
      ...this.charges.getMeshes()
    ];
  }

  getAllShapes(){
    this.initAllShapes();
    return this.shapes;
  }


}


