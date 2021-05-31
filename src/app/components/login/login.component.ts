import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { AuthService } from 'src/app/services/auth/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // items = ['item1'];
  // addItem(newItem: string) {
  //   this.items.push(newItem);
  // }
  loginForm = {email: '', password: ''}
  // router: any;

  constructor(private authService : AuthService, private   router:Router) { }

  minPw = 8;
  maxPw = 10;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(this.minPw),
    Validators.maxLength(this.maxPw),
    // Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm)
    this.authService.login(this.loginForm)
      .then(newUser => {
        console.log('ok')

        // this.router.navigateByUrl(['user-profile']);
        this.router.navigate(['../','user-profile'])
        .then(nav => {
          console.log(nav); // true if navigation is successful
        }, err => {
          console.log(err) // when there's an error
        });
        // window.location.href = route.data['externalUrl'];
        // newUser.send(200);
      }).catch(e => {
        // this.toastr.error('Ha ocurrido un error con la creación del producto ' + this.newProduct.name);
        // e.error(404);
        console.log('po me da que no')
      });
  }

}
