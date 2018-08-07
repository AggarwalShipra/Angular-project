import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../../Services/user.service';
import { User } from '../../Schema/userSchema';
import { ValidateService } from '../../Services/validate.service';
declare var jQuery: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  //user:User[];
  user: User;
  constructor(private userService: UserService, private validateService: ValidateService) { }

  ngOnInit() {
    this.user = new User();
    this.signupForm = new FormGroup({
      'firstname': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),
      'lastname': new FormControl(null, Validators.pattern('[a-zA-z ]*')),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'confirmpassword': new FormControl(null, Validators.required, this.confirmPasswordValidator.bind(this))
    });
  }
  onSignup() {
      if (this.signupForm.valid) {
      this.user.first_name = this.signupForm.get('firstname').value;
      this.user.last_name = this.signupForm.get('lastname').value;
      this.user.email = this.signupForm.get('email').value;
      this.user.password = this.signupForm.get('password').value;
      this.userService.haveUser(this.user.email)
        .subscribe((data) => {
          if (data) {
            alert('Email Id already Registered.Try Login or create new Account.');
          }
          else if (!data) {
            this.userService.addUser(this.user)
              .subscribe((data) => {
                console.log(data);
              })
              alert('User account Successfully Created.Login to continue');
          }
        })
        this.signupForm.reset();
      // jQuery("#LoginSignupModal").modal("hide");
    }
  }
  confirmPasswordValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      if (control.value != this.signupForm.get('password').value)
        resolve({ 'confirmPassword': true });
      else
        resolve(null);
    });
    return promise;
  }

}
