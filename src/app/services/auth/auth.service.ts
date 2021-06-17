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
      if(res.data.status===false){
        const error = {status: res.data.status,error: res.data.error}
        return error
      }else{
        let user = res.data.user;
        let token = res.data.token;
        localStorage.setItem('token',token);
        localStorage.setItem('user', JSON.stringify(user));
        return this.isAuthenticate = true;
      }
    })
  }
  async register(registerData: {name: string, last_name: string,post_code: string, email: string, password: string}){
    return axios.post( this.apiURL+'register', registerData)
    .then(res => {
      if(res.data.status===false){
        return res.data
      }else{
        let user = res.data.user;
        let token = res.data.token;
        localStorage.setItem('token',token);
        localStorage.setItem('user', JSON.stringify(user));
        res ? this.isAuthenticate = true : this.isAuthenticate;
        return res.data
      }


    })
  }

  async resetPass(resetData: {email: string}){
    return axios.post( this.apiURL+'reset-pass', resetData)
    .then(res => {
      if(res.data.status===false){
        return res.data
      }else{
        return res.data
      }


    })
  }

  authState = () => this.isAuthenticate;
}
