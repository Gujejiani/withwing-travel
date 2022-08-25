import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromButtonsComponent } from './from-buttons.component';

describe('FromButtonsComponent', () => {
  let component: FromButtonsComponent;
  let fixture: ComponentFixture<FromButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
