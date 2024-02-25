import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MathJaxComponent } from "../math-jax.component";

@Component({
    selector: 'app-colombs-law',
    standalone: true,
    templateUrl: './colombs-law.component.html',
    styleUrl: './colombs-law.component.css',
    imports: [
        MatCardModule, MatButtonModule,
        MathJaxComponent
    ]
})
export class ColombsLawComponent {
  formelColomb: string = "\\[F = k \\cdot \\frac{q_1 q_2}{r^2}\\]"

}
