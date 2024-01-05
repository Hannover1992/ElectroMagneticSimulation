import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeSceneComponent } from './ThreeSceneComponent';

describe('ThreeSceneComponent', () => {
  let component: ThreeSceneComponent;
  let fixture: ComponentFixture<ThreeSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeSceneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
