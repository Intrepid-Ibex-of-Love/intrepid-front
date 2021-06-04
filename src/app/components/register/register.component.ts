import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = {
    name: '',
    last_name: '',
    post_code: '',
    email: '',
    password: ''
  };
  constructor(private authService : AuthService, private   router:Router) { }
  minPw = 8;
  maxPw = 10;

  NameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z ]{2,254}'),
    Validators.maxLength(50),
    Validators.minLength(3)
  ]);

  lastNameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z ]{2,254}'),
    Validators.maxLength(50)
  ]);

  postCodeFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(5),
    Validators.minLength(5),
    Validators.pattern('((0[1-9]|5[0-2])|[1-4][0-9])[0-9]{3}'),

  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minPw),
    Validators.maxLength(this.maxPw),
  ]);

  matcher = new MyErrorStateMatcher();


  ngOnInit(): void {
  }
  register() {
    // if()
    this.authService.register(this.registerForm)
      .then(newUser => {
        this.router.navigate(['../','user-profile'])
        .then(nav => {
          console.log(nav); // true if navigation is successful
        }, err => {
          console.log(err) // when there's an error
        });
      }).catch(e => {
        e.error(403);

      });
  }
}
