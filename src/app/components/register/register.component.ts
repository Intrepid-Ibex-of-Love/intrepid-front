import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
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
  constructor(private authService: AuthService, private router: Router) { }
  minPw = 8;
  maxPw = 10;
  focus = false

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

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minPw),
    Validators.maxLength(this.maxPw),
  ]);


  newForm = new FormGroup({
    name: this.name,
    last_name: this.last_name,
    post_code: this.post_code,
    email: this.email,
    password: this.password
  })

  matcher = new MyErrorStateMatcher();


  ngOnInit(): void {
  }
  register() {
    if (this.newForm.valid) {
      console.log(this.registerForm)
      this.authService.register(this.registerForm)
        .then(newUser => {
          if (newUser.status===false){
            alert(newUser.error)
          } else{
            alert(newUser.error)
            this.router.navigate(['../', 'login']);
          }
        })
    }
  }
}
