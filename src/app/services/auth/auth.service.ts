import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL = "http://localhost3000/"

  constructor() { }

  login(loginData: {email: String, password: String}){
    return axios.post( this.apiURL+'/login', loginData)
    .then(res => res.data);
  }
}
