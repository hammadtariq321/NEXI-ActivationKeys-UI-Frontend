import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateTreatmentprogramsComponent } from './validate-treatmentprograms.component';

describe('ValidateTreatmentprogramsComponent', () => {
  let component: ValidateTreatmentprogramsComponent;
  let fixture: ComponentFixture<ValidateTreatmentprogramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateTreatmentprogramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateTreatmentprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
