import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from 'src/app/services/users/user.service';
import { ToastrService } from 'ngx-toastr';
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
      private route: Router,
      private userService : UserService
  ){
    let userLogin = JSON.parse(localStorage.getItem('user') || '{}');
    let token = localStorage.getItem('token');
    this.userData = userLogin;
  }

  name = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z ñÑáéíóúÁÉÍÓÚ\s]+'),
    Validators.maxLength(50),
    Validators.minLength(3)
  ]);

  last_name = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z ñÑáéíóúÁÉÍÓÚ\s]+'),
    Validators.maxLength(50),
    Validators.minLength(3)
  ]);

  post_code = new FormControl('', [
    Validators.required,
    Validators.maxLength(5),
    Validators.minLength(5),
    Validators.pattern('((0[1-9]|5[0-2])|[1-4][0-9])[0-9]{3}'),

  ]);

  email = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    Validators.email,
  ]);


  newForm = new FormGroup({
    name: this.name,
    last_name: this.last_name,
    post_code: this.post_code,
    email: this.email
  })


  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }

  update() {
    console.log('entra')
    if (this.newForm.valid) {
      this.userService.updateUser(this.userData)
        .then(newUser => {
          if (newUser.status===false){
            this.toastr.error(newUser.error);
          } else{
            this.toastr.success(newUser.error);
          }
        })
    }else{
      this.toastr.error('Rellena todos los campos');
    }
  }
}
