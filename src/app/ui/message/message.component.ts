import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  @Output() navToProfile = new EventEmitter<void>()


  continueClicked(){
    this.navToProfile.emit()
  }
}
