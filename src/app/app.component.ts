import { Component, OnInit } from '@angular/core';
import { UserService } from './Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'withwing-travel';
constructor(private userService: UserService){

}
  ngOnInit(){
    const user: any = localStorage.getItem('user')

    if(user){
      this.userService.addSavedUser(JSON.parse(user))
    }
  }
}
