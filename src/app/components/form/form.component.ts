import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Directions } from 'src/app/models/directions';
import { FormPage } from 'src/app/models/formPage';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  showPrev =false
  direction = Directions
  FORM_PAGE= FormPage
  currentPage = FormPage.CLIENT_FORM
  constructor(private activeRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.queryParams)

    if(this.router.url.includes('address') ||  this.router.url.includes('identity')){
      this.showPrev =true
    }
  }
  formNavTriggered(direction: Directions){
    if(direction ===this.direction.RIGHT && !this.router.url.includes('address')){
    this.router.navigate(['/client-form/client/address'])
      this.currentPage = this.FORM_PAGE.CLIENT_FORM_ADRESS
      this.showPrev =true
    }

  
    if(direction===this.direction.RIGHT && this.router.url.includes('address')){
      this.router.navigate(['/client-form/client/identity'])
      this.currentPage = this.FORM_PAGE.CLIENT_FORM_IDENTITY
    } 

    if(direction === this.direction.LEFT && this.router.url.includes('identity')){
      this.router.navigate(['/client-form/client/address'])
      this.currentPage = this.FORM_PAGE.CLIENT_FORM_ADRESS
    }

    if(direction ===this.direction.LEFT && this.router.url.includes('address')){
      this.router.navigate(['/client-form/client'])
      this.currentPage = this.FORM_PAGE.CLIENT_FORM
      this.showPrev =false
    }

   

    console.log(direction)
  }


}
