import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public numberOfChargesSource = new BehaviorSubject<number>(20);
}
