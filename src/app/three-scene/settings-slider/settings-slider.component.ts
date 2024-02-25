import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule   } from '@angular/material/checkbox';
import {MatInputModule      } from '@angular/material/input';
import {MatFormFieldModule  } from '@angular/material/form-field';
import {MatCardModule       } from '@angular/material/card';
import { SettingsService } from '../settings.service';

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
  showTicks = false;
  thumbLabel = false;
  number_of_charges: number;


  constructor(
    private settingsService:SettingsService
  ) {
      this.number_of_charges = this.settingsService.numberOfChargesSource.value;

    }


    updateNumberOfCharges() {
      this.settingsService.numberOfChargesSource.next(this.number_of_charges);
    }


}
