import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Directions } from 'src/app/models/directions';


@Component({
  selector: 'app-slider-arrows',
  templateUrl: './slider-arrows.component.html',
  styleUrls: ['./slider-arrows.component.scss']
})
export class SliderArrowsComponent implements OnInit {
  constructor() { }
  direction=Directions
  @Output() sliderArrowClicked = new EventEmitter<Directions>()

  ngOnInit(): void {
  }

  arrowClicked(direction: Directions){
    this.sliderArrowClicked.emit(direction)
    console.log(direction)
  }


}
