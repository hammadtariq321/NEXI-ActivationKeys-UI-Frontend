import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateFrequencyfolderComponent } from './validate-frequencyfolder.component';

describe('ValidateFrequencyfolderComponent', () => {
  let component: ValidateFrequencyfolderComponent;
  let fixture: ComponentFixture<ValidateFrequencyfolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateFrequencyfolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateFrequencyfolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
