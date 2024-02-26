import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperPositionCardComponent } from './super-position-card.component';

describe('SuperPositionCardComponent', () => {
  let component: SuperPositionCardComponent;
  let fixture: ComponentFixture<SuperPositionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperPositionCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperPositionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
