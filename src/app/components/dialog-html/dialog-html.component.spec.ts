import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHTMLComponent } from './dialog-html.component';

describe('DialogHTMLComponent', () => {
  let component: DialogHTMLComponent;
  let fixture: ComponentFixture<DialogHTMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogHTMLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
