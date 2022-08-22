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
  faCoffee = faCoffee;
  ngOnInit(): void {
  }

}
