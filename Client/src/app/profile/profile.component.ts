import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '../../../node_modules/@angular/router';
import { User } from '../Schema/userSchema';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getProfile().subscribe((data)=>{
      this.user=data;
    })
  }
}
