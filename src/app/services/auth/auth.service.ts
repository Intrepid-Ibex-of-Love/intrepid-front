import { Injectable } from '@angular/core';
import axios from 'axios';
// import { send } from 'process';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  apiURL = "http://localhost:3002/"
  isAuthenticate = false;

  constructor() { }

  async login(loginData: {email: string, password: string}){
    return axios.post( this.apiURL+'login', loginData)
    .then(res => {
        let user = res.data.user;
        let token = res.data.token;
        localStorage.setItem('token',token);
        localStorage.setItem('user', JSON.stringify(user));
        this.isAuthenticate = true;
      return this.isAuthenticate;
    })
    .catch(e => e.send(404).message('contraseña o usuarios incorrectos'))
  }
  async register(registerData: {name: string, last_name: string,post_code: string, email: string, password: string}){
    return axios.post( this.apiURL+'register', registerData)
    .then(res => {
      console.log( res );
      return res ? this.isAuthenticate = true : this.isAuthenticate;

    })
    // .catch(e => alert(e.))
  }

  authState = () => this.isAuthenticate;
}
