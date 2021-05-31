import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL = "http://localhost:3002/"

  constructor() { }

  async login(loginData: {email: string, password: string}){
    return axios.post( this.apiURL+'login', loginData)
    .then(res => res.data);
  }
  async register(registerData: {name: string, last_name: string,post_code: string, email: string, password: string}){
    return axios.post( this.apiURL+'register', registerData)
    .then(res => res.data);
  }
}
