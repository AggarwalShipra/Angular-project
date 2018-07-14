import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../../Services/user.service';
import { User } from '../../Schema/userSchema';
declare var jQuery:any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  
  //user:User[];
  user:User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user=new User();
    this.signupForm=new FormGroup({
      'firstname':new FormControl(null,[Validators.required,Validators.pattern('[a-zA-z]*')]),
      'lastname':new FormControl(null,Validators.pattern('[a-zA-z ]*')),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,Validators.required),
      'confirmpassword':new FormControl(null,Validators.required,this.confirmPasswordValidator.bind(this))
    });
  }
  onSignup()
  {
    this.user.first_name=this.signupForm.get('firstname').value;
    this.user.last_name=this.signupForm.get('lastname').value;
    this.user.email=this.signupForm.get('email').value;
    this.user.password=this.signupForm.get('password').value;
    this.userService.haveUser(this.user.email)
    .subscribe((data)=>{
      if(data)
      {
        console.log('Email Id already Registered');
      }
      else if(!data)
      {
        this.userService.addUser(this.user)
        .subscribe((data)=>{
          console.log(data);
        })
      }
    })
    this.signupForm.reset();
    jQuery("#LoginSignupModal").modal("hide");
    // console.log(this.signupForm);
    
    // this.userService.getUser().subscribe((data:User[])=>{
    //   // console.log("Data:",data);
    // this.user=data;
    // });

    
  }
  confirmPasswordValidator(control:FormControl):Promise<any>|Observable<any>
  {
    const promise=new Promise((resolve,reject)=>
  {
    if(control.value!=this.signupForm.get('password').value)
    resolve({'confirmPassword':true});
    else
    resolve(null);
  });
  return promise;
  }
}
