import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
    // console.log('header');
  }
  onLogout()
  {
    this.userService.logout();
    alert("User Successfully Logged out")
  }
}
