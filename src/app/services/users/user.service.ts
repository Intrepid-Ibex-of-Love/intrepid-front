import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL= 'http://localhost:3002/user'

  constructor() { }

  getUserId(user : User) {
    return axios.get(this.apiURL + "/users/:id").then(users => {}).catch(e => console.error(e));
  }
  updateUser(user: User) {
    return axios.patch(this.apiURL + "/users/:id").then(res => res.data).catch(e => console.error(e));
  }
}

