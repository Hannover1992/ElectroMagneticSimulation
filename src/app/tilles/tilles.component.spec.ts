import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TillesComponent } from './tilles.component';

describe('TillesComponent', () => {
  let component: TillesComponent;
  let fixture: ComponentFixture<TillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TillesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
