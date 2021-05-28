import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = {email: '', password: ''}
  // loginForm:{email:string, password : string }[] = []
  // email: string='';
  // password:string= '';

  constructor(private authService : AuthService) { }

  login() {
    // const user = {email: this.email, password: this.password};
    this.authService.login(this.loginForm)
    .then(res=> {
      console.log('Logueado');
    })
    .catch(e => {
      console.log('No logueado');
    })
  }

  ngOnInit(): void {
  }

}
