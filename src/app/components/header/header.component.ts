import { Component, OnInit } from '@angular/core';
import { faCoffee  } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  showMenu= false
  faCoffee = faCoffee;
  ngOnInit(): void {
  }



  menuClicked(){
    this.showMenu = !this.showMenu
  }

}
