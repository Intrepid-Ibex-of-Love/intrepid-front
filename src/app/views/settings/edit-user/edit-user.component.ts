import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from 'src/app/services/users/user.service';
import { ToastrService } from 'ngx-toastr';
import { identifierModuleUrl } from '@angular/compiler';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  minPw = 8;
  maxPw = 10;

  userData;

  constructor(
      private user: UserService, 
      private toastr: ToastrService, 
      private route: Router
  ){ 
    let userLogin = JSON.parse(localStorage.getItem('user') || '{}');
    let token = localStorage.getItem('token');
    this.userData = userLogin;
  }

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

  update() {
    
  }
}
