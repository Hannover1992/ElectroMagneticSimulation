import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThreeSceneComponent } from './three-scene/three-scene.component';
import { MathJaxComponent } from "./math-jax/math-jax.component";
import { SettingsSliderComponent } from "./three-scene/settings-slider/settings-slider.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        ThreeSceneComponent,
        MathJaxComponent,
        SettingsSliderComponent
    ]
})
export class AppComponent {
  title = 'ElectricForceSimulation';
}
