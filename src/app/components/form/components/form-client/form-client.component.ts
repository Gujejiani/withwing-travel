import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Directions } from 'src/app/models/directions';
import { FormPage } from 'src/app/models/formPage';
import { InputTypes } from 'src/app/models/inputTypes';
import {UserService} from '../../../../Service/user.service'
@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements  AfterViewInit{
  @Output() formNavigated = new EventEmitter<Directions>()
  constructor(private chRef: ChangeDetectorRef,private router: Router, private userService: UserService) { }


  ngAfterViewInit(): void {

    const clientInfo =  this.userService.getClientInfo() as any

    if(clientInfo){
      const clGroups = clientInfo?.clientGroups
      console.log(clientInfo)
      clientInfo.clientGroups = [];
      
      this.clientForm.setValue(clientInfo)
      this.addClientGroups(clGroups)
      this.chRef.detectChanges();
    }
   

  }

  dateValue = '1998-12-04'
  formPage= FormPage
  currentFormPage: FormPage = this.formPage.CLIENT_FORM



  clientForm: FormGroup = new FormGroup({
    'fullName': new FormControl(null, Validators.required),
    'birthDate': new FormControl(this.dateValue, Validators.required),
    'gender': new FormControl('Male'),
    'phoneNumber': new FormControl(null, [Validators.required,Validators.maxLength(11), Validators.minLength(11), Validators.pattern('^[0-9]*$')]),
    
    'coordinator': new FormControl('Jurgen Klop', Validators.required),
    'notSendSms': new FormControl(false, Validators.required),
    'clientGroups': new FormArray([], Validators.required)
  })


  // inputChange(data: {value: string, type: InputTypes}){
  //   if(data.type==='date'){
  //     this.dateValue = data.value
  //   }
  // }


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

  dateClicked(){
    const input =  document.getElementById('date') as any
    input?.showPicker()
   }
   
   

  
 
   inputChange(e: any){
    this.dateValue = e.target.value
    
   }
   onSubmit(){
    if(this.clientForm.valid){
      this.userService.addUserInfo(this.clientForm.value)
      this.router.navigate(['/client-form/client/address'])
    }
    
   }



   onCheckboxChange(e: any) {
    console.log(e.target.value)
    const checkArray: FormArray = this.clientForm.get('clientGroups') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }


  addClientGroups(clientGroups: string[]){
    const checkArray: FormArray = this.clientForm.get('clientGroups') as FormArray;
    
    if (clientGroups.length) {
      console.log('added')
      clientGroups.forEach((client: string)=>{
        checkArray.push(new FormControl(client));
        const className = client.split(' ')[0]
       
        const input = document.querySelector(`.${className}`) as HTMLInputElement
        input.checked = true
       
       
      })
 
    }


  }



   
}
