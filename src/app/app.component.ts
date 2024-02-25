import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThreeSceneComponent } from './three-scene/three-scene.component';
import { TillesComponent } from "./tilles/tilles.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        ThreeSceneComponent,
        TillesComponent
    ]
})
export class AppComponent {
  title = 'ElectricForceSimulation';
}
