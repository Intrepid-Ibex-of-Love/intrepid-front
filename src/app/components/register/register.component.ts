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
  constructor(private authService : AuthService, private router:Router) { }
  minPw = 8;
  maxPw = 10;
  focus = false

  NameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z ñÑáéíóúÁÉÍÓÚ\s]+'),
    Validators.maxLength(50),
    Validators.minLength(3)
  ]);

  lastNameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z ñÑáéíóúÁÉÍÓÚ\s]+'),
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
    Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minPw),
    Validators.maxLength(this.maxPw),
  ]);
  // si alguien sabe como hacer la validaciones con formGroup le invito a cerveza
  // formGroup = this.fb.group({
  //   email: [Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),Validators.email]
  // })

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
        alert('Campos incorrectos, revisa que la información sea correcta');

      });
  }
}
