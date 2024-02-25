import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColombsLawComponent } from './colombs-law.component';

describe('ColombsLawComponent', () => {
  let component: ColombsLawComponent;
  let fixture: ComponentFixture<ColombsLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColombsLawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColombsLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
