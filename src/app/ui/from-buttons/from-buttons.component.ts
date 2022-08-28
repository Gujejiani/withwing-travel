import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Directions } from 'src/app/models/directions';


@Component({
  selector: 'app-from-buttons',
  templateUrl: './from-buttons.component.html',
  styleUrls: ['./from-buttons.component.scss']
})
export class FromButtonsComponent implements OnInit {

  constructor() { }
  @Input() disabled =false
  @Input() showPrev: boolean =false;
  @Input() showNext: boolean =false;
  @Input() showSubmit: boolean =false;
  @Output() formNavigated = new EventEmitter<Directions>()
  directions= Directions
  ngOnInit(): void {
  }



  formButtonSlicked(direction: Directions){
    this.formNavigated.emit(direction)
  }
}
