import { Component, OnInit } from '@angular/core';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private mainService:MainService) { }

  ngOnInit() {
  }
  setDiv(value:boolean)
  {
      this.mainService.showLogInSignUp=value;
  }
}
