import { Component } from '@angular/core';
import { MathJaxComponent } from '../math-jax/math-jax.component';
import { SettingsSliderComponent } from '../three-scene/settings-slider/settings-slider.component';
import { ColombsLawComponent } from '../math-jax/colombs-law/colombs-law.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ElectricFiealdCardComponent } from "../math-jax/electric-fieald-card/electric-fieald-card.component";
import { SuperPositionCardComponent } from "../math-jax/super-position-card/super-position-card.component";



@Component({
    selector: 'app-tilles',
    standalone: true,
    templateUrl: './tilles.component.html',
    styleUrl: './tilles.component.css',
    imports: [
        MathJaxComponent,
        SettingsSliderComponent,
        ColombsLawComponent,
        MatGridListModule,
        ElectricFiealdCardComponent,
        SuperPositionCardComponent
    ]
})
export class TillesComponent {

}
