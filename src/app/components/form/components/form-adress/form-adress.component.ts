import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Directions } from 'src/app/models/directions';
import { FormPage } from 'src/app/models/formPage';
import { InputTypes } from 'src/app/models/inputTypes';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-form-adress',
  templateUrl: './form-adress.component.html',
  styleUrls: ['./form-adress.component.scss']
})
export class FormAdressComponent implements OnInit, AfterViewInit {

  constructor(private chRef: ChangeDetectorRef,private router: Router, private userService: UserService) { }
  dateValue = '1998-12-04'
  formPage= FormPage
  DIRECTION = Directions
  currentFormPage: FormPage = this.formPage.CLIENT_FORM
  ngOnInit(): void {
  }



  ngAfterViewInit(): void {

    const addressInfo =  this.userService.getAddressInfo() as any

    if(addressInfo){
     
      this.addressForm.setValue(addressInfo)
      
      this.chRef.detectChanges();
    }
   
  
  }


  addressForm: FormGroup = new FormGroup({
    'index': new FormControl(null, Validators.required),
    'country': new FormControl('Georgia', Validators.required),
    'area': new FormControl(),
    'city': new FormControl('Tbilisi', [Validators.required]),
    
    'street': new FormControl(null, Validators.required),
    'house': new FormControl(null, Validators.required),
 
  })








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

  }

  onSubmit(direction: Directions){
  
    if(direction ===this.DIRECTION.RIGHT && this.addressForm.valid){

      this.router.navigate(['/client-form/client/identity'])
      this.userService.addUserInfo(this.addressForm.value)
    }else if(direction ===this.DIRECTION.LEFT){
      this.router.navigate(['/client-form/client/'])
    }
  
    
 }

 
}
