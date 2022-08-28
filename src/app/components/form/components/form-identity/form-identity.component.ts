import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Directions } from 'src/app/models/directions';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-form-identity',
  templateUrl: './form-identity.component.html',
  styleUrls: ['./form-identity.component.scss']
})
export class FormIdentityComponent implements OnInit {
  dateValue = '2022-12-04'
  constructor(private router: Router,private chRef:  ChangeDetectorRef, private userService: UserService) { }
  ngAfterViewInit(): void {
   
    const addressInfo =  this.userService.getIdentityInfo() as any

    if(addressInfo){
     
      this.identityForm.setValue(addressInfo)
      
      this.chRef.detectChanges();
    }
   
  
  }


  identityForm: FormGroup = new FormGroup({
    'documentType': new FormControl('Passport', Validators.required),
    'series': new FormControl(null, Validators.required),
    'passportNumber': new FormControl(),
    'issueEdBy': new FormControl('Tbilisi', [Validators.required]),
     'fileSource': new FormControl('', [Validators.required]),
    'dateOfIssue': new FormControl(this.dateValue, Validators.required),
    'file': new FormControl(null, Validators.required),
 
  })


  DIRECTION = Directions
  ngOnInit(): void {
  }

  onFileChange(event: any) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.identityForm.patchValue({
        fileSource: file
      });
    }
  }
  onSubmit(direction: Directions){
    console.log(this.identityForm)
    if(direction ===this.DIRECTION.LEFT){

      this.router.navigate(['/client-form/client/address'])
    }
    if(this.identityForm.valid){
      this.userService.addUserInfo(this.identityForm.value)
      this.userService.saveUser()
      this.router.navigate(['/created-client'])
    }
  
    // 
 }
 inputChange(e: any){
  this.dateValue = e.target.value
  
 }
 dateClicked(){
  const input =  document.getElementById('date') as any
  input?.showPicker()
 }
}
