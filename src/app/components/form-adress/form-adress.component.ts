import { Component, OnInit } from '@angular/core';
import { FormPage } from 'src/app/models/formPage';
import { InputTypes } from 'src/app/models/inputTypes';

@Component({
  selector: 'app-form-adress',
  templateUrl: './form-adress.component.html',
  styleUrls: ['./form-adress.component.scss']
})
export class FormAdressComponent implements OnInit {

  constructor() { }
  dateValue = '1998-12-04'
  formPage= FormPage

  currentFormPage: FormPage = this.formPage.CLIENT_FORM
  ngOnInit(): void {
  }
  inputChange(data: {value: string, type: InputTypes}){
    if(data.type==='date'){
      this.dateValue = data.value
    }
  }


  smsCheckBoxCLicked(event: Event){
    const input = event.target as HTMLInputElement
    const mark =  document.querySelector('.checkmark-selected')
    if(!mark) return
    if(input?.checked){
   
    
        mark.classList.add('checkmark-selected--show')
     
    
    }else {
      mark.classList.remove('checkmark-selected--show')
    }
    console.log(input.checked)
  }
}
