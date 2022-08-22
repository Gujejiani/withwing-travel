import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderArrowsComponent } from './slider-arrows.component';

describe('SliderArrowsComponent', () => {
  let component: SliderArrowsComponent;
  let fixture: ComponentFixture<SliderArrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderArrowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
