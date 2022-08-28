import { Component, OnInit } from '@angular/core';
import { FormPage } from 'src/app/models/formPage';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.scss']
})
export class HeaderBannerComponent implements OnInit {
  isLoggedIn: boolean
  constructor(private userService: UserService) { }
  formPage = FormPage;
  ngOnInit(): void {
    const user: any = this.userService.getUser()
    if(user?.fullName){
      this.isLoggedIn =true
    }
  }

}
