import { Component, OnInit } from '@angular/core';
import { faCoffee  } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/fontawesome-svg-core';
import { UserService } from 'src/app/Service/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean
  constructor(private userService: UserService) { }
  showMenu= false
  faCoffee = faCoffee;
  ngOnInit(): void {
    const user: any = this.userService.getUser()
    if(user?.fullName){
      this.isLoggedIn =true
    }
  }


  menuClicked(){
    this.showMenu = !this.showMenu
  }

}
