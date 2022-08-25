import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-from-buttons',
  templateUrl: './from-buttons.component.html',
  styleUrls: ['./from-buttons.component.scss']
})
export class FromButtonsComponent implements OnInit {

  constructor() { }
  @Input() showPrev: boolean =false;
  @Input() showNext: boolean =false;
  @Input() showSubmit: boolean =false;

  ngOnInit(): void {
  }

}
