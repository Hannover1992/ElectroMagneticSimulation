import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MathJaxComponent } from "../math-jax.component";

@Component({
    selector: 'app-electric-fieald-card',
    standalone: true,
    templateUrl: './electric-fieald-card.component.html',
    styleUrl: './electric-fieald-card.component.css',
    imports: [MatCardModule, MatButtonModule, MathJaxComponent]
})
export class ElectricFiealdCardComponent {
  ElectricFiealdFormal: string = "\\[E = k \\cdot \\frac{q}{r^2}\\]";

}
