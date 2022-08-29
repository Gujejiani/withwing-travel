import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../Service/user.service";



@Injectable({providedIn: 'root'})
export class CanActivateGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
  
    let canActivate = false
    if((route.url[0].path === 'address' && this.userService.getClientInfo()?.fullName) || (route.url[0].path === 'identity' && this.userService.getAddressInfo()?.index)){
      
      canActivate =true
    };

    if(!canActivate){
      this.router.navigate(['/client-form/client'])
    }
    return canActivate
  }
}