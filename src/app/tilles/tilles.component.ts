import { Component } from '@angular/core';
import { MathJaxComponent } from '../math-jax/math-jax.component';
import { SettingsSliderComponent } from '../three-scene/settings-slider/settings-slider.component';
import { ColombsLawComponent } from '../math-jax/colombs-law/colombs-law.component';
import {MatGridListModule} from '@angular/material/grid-list';



@Component({
  selector: 'app-tilles',
  standalone: true,
  imports: [
        MathJaxComponent,
        SettingsSliderComponent,
        ColombsLawComponent,
        MatGridListModule
  ],
  templateUrl: './tilles.component.html',
  styleUrl: './tilles.component.css'
})
export class TillesComponent {

}
