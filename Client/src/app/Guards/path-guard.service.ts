import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../Services/user.service';
declare var jQuery: any;
@Injectable()
export class PathGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {

  }
  canActivate() {
    if (this.userService.loggedIn())
    {
      return true;
    }
    else
      alert("Login to continue");
      this.router.navigate(["/"]);
      jQuery("#LoginSignupModal").modal("show");
  }
}