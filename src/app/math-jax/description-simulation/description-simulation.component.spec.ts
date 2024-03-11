import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionSimulationComponent } from './description-simulation.component';

describe('DescriptionSimulationComponent', () => {
  let component: DescriptionSimulationComponent;
  let fixture: ComponentFixture<DescriptionSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionSimulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
