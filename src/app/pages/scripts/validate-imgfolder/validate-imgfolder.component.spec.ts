import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateImgfolderComponent } from './validate-imgfolder.component';

describe('ValidateImgfolderComponent', () => {
  let component: ValidateImgfolderComponent;
  let fixture: ComponentFixture<ValidateImgfolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateImgfolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateImgfolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
