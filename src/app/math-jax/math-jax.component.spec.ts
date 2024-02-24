import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathJaxComponent } from './math-jax.component';

describe('MathJaxComponent', () => {
  let component: MathJaxComponent;
  let fixture: ComponentFixture<MathJaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathJaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MathJaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
