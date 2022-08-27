import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdressComponent } from './form-adress.component';

describe('FormAdressComponent', () => {
  let component: FormAdressComponent;
  let fixture: ComponentFixture<FormAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAdressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
