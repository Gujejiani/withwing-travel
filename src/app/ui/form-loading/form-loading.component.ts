import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-loading',
  templateUrl: './form-loading.component.html',
  styleUrls: ['./form-loading.component.scss']
})
export class FormLoadingComponent implements OnInit {
  @Input() secondPage: boolean =false
  @Input() lastPage: boolean =false
  constructor() { }

  ngOnInit(): void {
  }

}
