import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = {
    name: '',
    lastname: '',
    street: '',
    number: '',
    town: '',
    email: '', 
    password: ''
  };
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  register() {
    // const user = {email: this.email, password: this.password};
    this.authService.register(this.registerForm)
    .then(res=> {
      console.log('Logueado');
    })
    .catch(e => {
      console.log('No logueado');
    })
  }
}
