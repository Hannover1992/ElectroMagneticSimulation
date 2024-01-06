
import { Injectable } from '@angular/core';
import { SphereGeometry } from 'three/src/geometries/SphereGeometry';
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial';
import { Mesh } from 'three/src/objects/Mesh';
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
    private charges  :ChargesService
  ) {
    this.shapes = [];
    this.initAllShapes();
  }

  update(){
    this.arrows.updateArrows();
  }


  initAllShapes(){
    // let shapes = {};
    // shapes = {...this.arrows.getShapes(), ...shapes};
    this.shapes = [
      ...this.arrows.getShapes(),
      ...this.charges.getShapes()

    ];
  }

  getAllShapes(){
    return this.shapes;
  }


}


