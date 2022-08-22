import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }
  sliderImgCount =1
  sliderImg = `url(./assets/img/carousel-${this.sliderImgCount}.jpg)`
  ngOnInit(): void {
  }

}
