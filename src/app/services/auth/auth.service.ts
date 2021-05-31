import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL = environment.apiUrl

  constructor() { }

  async login(loginData: {email: string, password: string}){
    return axios.post( this.apiURL+'login', loginData)
    .then(res => res.data);
  }
  async register(registerData: {name: string, lastname: string, email: string, password: string}){
    return axios.post( this.apiURL+'login', registerData)
    .then(res => res.data);
  }
}
