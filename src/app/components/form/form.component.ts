import { Component, OnInit } from '@angular/core';
import { InputTypes } from 'src/app/models/inputTypes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }
  dateValue = '1998-12-04'
  ngOnInit(): void {
  }


  inputChange(data: {value: string, type: InputTypes}){
    if(data.type==='date'){
      this.dateValue = data.value
    }
  }

}
