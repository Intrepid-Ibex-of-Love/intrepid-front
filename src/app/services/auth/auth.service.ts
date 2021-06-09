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
      console.log(res)
      if(res.data.status===false){
        const error = {status: res.data.status,error: res.data.error}
        return error
      }else{
        // return console.log('peta')
        let user = res.data.user;
        let token = res.data.token;
        localStorage.setItem('token',token);
        localStorage.setItem('user', JSON.stringify(user));
        return this.isAuthenticate = true;
      }
    })
    // .catch(e => e.send(404).message('contraseña o usuarios incorrectos'))
  }
  async register(registerData: {name: string, last_name: string,post_code: string, email: string, password: string}){
    return axios.post( this.apiURL+'register', registerData)
    .then(res => {
      console.log('service', res );
      if(res.data.status===false){
        return res.data
      }else{
        return res ? this.isAuthenticate = true : this.isAuthenticate;
      }


    })
    // .catch(e => alert(e.))
  }

  authState = () => this.isAuthenticate;
}
