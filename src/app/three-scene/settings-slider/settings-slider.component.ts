import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule   } from '@angular/material/checkbox';
import {MatInputModule      } from '@angular/material/input';
import {MatFormFieldModule  } from '@angular/material/form-field';
import {MatCardModule       } from '@angular/material/card';

@Component({
  selector: 'app-settings-slider',
  standalone: true,
  imports: [
    FormsModule,      // Ensure FormsModule is imported
    MatSliderModule, // And MatSliderModule
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule ],
    templateUrl: './settings-slider.component.html',
    styleUrls: ['./settings-slider.component.css']
})
export class SettingsSliderComponent {
  gridSizeMax = 100;
  gridSizeMin = 0;
  step = 1;
  value = 20;
  showTicks = false;
  thumbLabel = false;


  numberOfCharges: number = 2;  // Ensure this is a number as well
}
