import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergenciaLoginComponent } from './emergencia-login.component';

describe('EmergenciaLoginComponent', () => {
  let component: EmergenciaLoginComponent;
  let fixture: ComponentFixture<EmergenciaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergenciaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergenciaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
