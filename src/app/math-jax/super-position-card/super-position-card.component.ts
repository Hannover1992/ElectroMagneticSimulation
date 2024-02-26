import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MathJaxComponent } from '../math-jax.component';

@Component({
  selector: 'app-super-position-card',
  standalone: true,
  imports: [MatCardModule, MathJaxComponent],
  templateUrl: './super-position-card.component.html',
  styleUrl: './super-position-card.component.css'
})
export class SuperPositionCardComponent {

  superPositionFormel: string = "\\[E_{\\text{total}} = \\sum_{i=1}^{n} E_i\\]";

}
