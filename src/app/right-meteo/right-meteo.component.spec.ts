import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMeteoComponent } from './right-meteo.component';

describe('RightMeteoComponent', () => {
  let component: RightMeteoComponent;
  let fixture: ComponentFixture<RightMeteoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightMeteoComponent]
    });
    fixture = TestBed.createComponent(RightMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
