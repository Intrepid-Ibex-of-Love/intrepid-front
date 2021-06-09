import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = { email: '', password: '' }

  constructor(private authService: AuthService, private router: Router) { }

  minPw = 8;
  maxPw = 10;
  focus = false

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
    email: this.email,
    password: this.password
  })

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }

  async login() {
    if (this.newForm.valid) {
      this.authService.login(this.loginForm)
        .then( newUser => {
          let a =  JSON.stringify(newUser);
          let b = JSON.parse(a)
          if(b.status===false){alert(b.error)}else{this.router.navigate(['../', 'user-profile'])}
        }).catch(e => {
          alert(e);

        });
    } else { alert('Campos incorrectos, revisa que la información sea correcta'); }
  }

}
