import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-item',
  templateUrl: './destination-item.component.html',
  styleUrls: ['./destination-item.component.scss']
})
export class DestinationItemComponent implements OnInit {
  @Input() src: string ='';
  @Input() title: string ='Maroco';
  constructor() { }
 
  ngOnInit(): void {
  }

}
