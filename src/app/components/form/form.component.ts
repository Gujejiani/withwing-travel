import { Component, OnDestroy, OnInit } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { Directions } from 'src/app/models/directions';
import { FormPage } from 'src/app/models/formPage';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject();
  showPrev =false
  direction = Directions
  FORM_PAGE= FormPage
  currentPage = FormPage.CLIENT_FORM
  constructor( private router: Router) { }
  ngOnInit(): void {
    /**
     * for loading -> to determine on which page we are
     */
   this.router.events.pipe(takeUntil(this.unsubscribe$), filter(ev=> ev instanceof NavigationEnd)).subscribe((urlInfo)=>{
    const nav = urlInfo as NavigationEnd
  
    if(nav.url.includes('identity')){
      this.currentPage = this.FORM_PAGE.CLIENT_FORM_IDENTITY
    }else if(nav.url.includes('address')){
      this.currentPage = this.FORM_PAGE.CLIENT_FORM_ADRESS
    }else if(nav.url.includes('client') ){
      this.currentPage = this.FORM_PAGE.CLIENT_FORM
    }
   })

  
}

  
overlayClicked(){
  this.router.navigate(['/'])
}
ngOnDestroy(): void {
  this.unsubscribe$.next()
  this.unsubscribe$.complete()
}




}
