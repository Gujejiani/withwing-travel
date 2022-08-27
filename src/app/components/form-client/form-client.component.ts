import { Component, OnInit } from '@angular/core';
import { Directions } from 'src/app/models/directions';
import { FormPage } from 'src/app/models/formPage';
import { InputTypes } from 'src/app/models/inputTypes';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dateValue = '1998-12-04'
  formPage= FormPage

  currentFormPage: FormPage = this.formPage.CLIENT_FORM



 


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
