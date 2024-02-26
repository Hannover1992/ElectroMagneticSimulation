import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricFiealdCardComponent } from './electric-fieald-card.component';

describe('ElectricFiealdCardComponent', () => {
  let component: ElectricFiealdCardComponent;
  let fixture: ComponentFixture<ElectricFiealdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricFiealdCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricFiealdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
