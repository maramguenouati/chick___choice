import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMeteoComponent } from './left-meteo.component';

describe('LeftMeteoComponent', () => {
  let component: LeftMeteoComponent;
  let fixture: ComponentFixture<LeftMeteoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftMeteoComponent]
    });
    fixture = TestBed.createComponent(LeftMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
