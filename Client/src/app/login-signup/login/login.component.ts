import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../Schema/userSchema';
import { UserService } from '../../Services/user.service';
declare var jQuery:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  haveError:Boolean;
  error:String;
  user:User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.haveError=false;
    this.error='';
    this.user=new User();
    this.loginForm=new FormGroup({
      "email":new FormControl(null,[Validators.required,Validators.email]),//first argument default value,second Valodator
      "password":new FormControl(null,Validators.required)
    });
  }
  onSubmit()
  {
    if(this.loginForm.valid)
    {
      this.user.email=this.loginForm.get('email').value;
      this.user.password=this.loginForm.get('password').value;
      this.userService.authenticate(this.user)
      .subscribe((data)=>{
        if(data.success)
        {
          this.userService.storeUserData(data.token,data.user);
          jQuery("#LoginSignupModal").modal("hide");
          alert('Succesful Login');
          this.loginForm.reset();  
        }
        else if(!data.success)
        {
          this.haveError=true;
          this.error='* '+data.msg;
          if(data.msg=="Wrong password")
          this.loginForm.get('password').setValue('');
          else if(data.msg=="user not found")
          this.loginForm.reset();
        }
      });
    }
  }

}
