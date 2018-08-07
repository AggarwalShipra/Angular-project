import { Injectable } from '@angular/core';
import { CanActivate, Router } from '../../../node_modules/@angular/router';
import { UserService } from '../Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }
  canActivate() {
    if (this.userService.loggedIn()) {
      if (this.userService.isAdmin())
        return true;
      else {
        alert("You dont have access to this page");
        this.router.navigate(["/"]);
        return false;
      }
    }
    else {
      alert("Login to Continue");
      this.router.navigate(["/"]);
      return false;
    }
  }
}
