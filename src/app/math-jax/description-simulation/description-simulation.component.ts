import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MathJaxComponent } from "../math-jax.component";

@Component({
  selector: 'app-description-simulation',
  standalone: true,
    imports: [MatCardModule, MatButtonModule, MathJaxComponent],
  templateUrl: './description-simulation.component.html',
  styleUrl: './description-simulation.component.css'
})
export class DescriptionSimulationComponent {

}
