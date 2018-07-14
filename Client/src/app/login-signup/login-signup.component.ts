import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from '../Services/main.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit,OnDestroy {

  constructor(private mainService:MainService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  ngOnDestroy()
  {
    this.mainService.showLogInSignUp=true;
  }
}
