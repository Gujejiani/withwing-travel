import { Component, OnInit } from '@angular/core';
import { FormPage } from 'src/app/models/formPage';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.scss']
})
export class HeaderBannerComponent implements OnInit {

  constructor() { }
  formPage = FormPage;
  ngOnInit(): void {
  }

}
