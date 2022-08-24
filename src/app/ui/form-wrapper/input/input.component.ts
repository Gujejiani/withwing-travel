import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { InputTypes } from 'src/app/models/inputTypes';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }
  @Input() placeHolder ='';
  @Input() idName = '';
  @Input() value='';
  @Input() labelText =''
  @Input() inputType: InputTypes ='text'
  @Input() defaultValue =''

  @Output() inputValueChanged= new EventEmitter<{value: string, type: InputTypes}>()
  ngOnInit(): void {
  }


  dateClicked(){
   const input =  document.getElementById('date') as any
   input?.showPicker()
  }


  inputChange(e: any){
   this.inputValueChanged.emit({value: e.target.value, type: this.inputType})
   
  }

}
