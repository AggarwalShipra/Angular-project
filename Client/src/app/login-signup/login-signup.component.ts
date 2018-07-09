import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit,OnDestroy {

  constructor(private mainService:MainService,private router:Router) { }

  ngOnInit() {
    this.mainService.showLogInSignUp=true;
  }
  setdiv(value:boolean)
  {
    this.mainService.showLogInSignUp=value;
    if(value==false)
    {
      console.log(value==false);
      this.router.navigate(['/']);
    }
  }
  showdiv()
  {
    if(this.mainService.showLogInSignUp==true)
    return true;
    else
    return false;
  }
  ngOnDestroy()
  {
    this.mainService.showLogInSignUp=true;
  }
}
