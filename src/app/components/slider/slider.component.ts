
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Directions } from 'src/app/models/directions';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {

  constructor() { }
   sliderImages = [1, 2]

  direction = Directions
  currentSlide =0


  sliderImg = `url(./assets/img/carousel-${this.currentSlide}.jpg)`
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.goToSlide(0);
  }

  sliderArrowClicked(direction: Directions){
  
    if(direction === this.direction.LEFT){
      this.moveSlider(this.direction.LEFT)
    }else {
      this.moveSlider(this.direction.RIGHT)
    }

    
  }
  addBackground(count: number){
    return `url(./assets/img/carousel-${count}.jpg)`

  }

  
  moveSlider(side: Directions) {
    const maxSlides = this.sliderImages.length;

    if (side === this.direction.RIGHT) {
      if (maxSlides - 1 === this.currentSlide) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
      this.goToSlide(this.currentSlide);
    }
    if (side === this.direction.LEFT) {
      if (this.currentSlide === 0) {
        this.currentSlide = maxSlides - 1;
      } else {
        this.currentSlide--;
      }
      this.goToSlide(this.currentSlide);
    }
  }
  goToSlide(slideIndex: number) {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach((slide: any, i) => {
      slide.style.transform = `translateX(${100 * (i - slideIndex)}%)`;
    });
  }

}
