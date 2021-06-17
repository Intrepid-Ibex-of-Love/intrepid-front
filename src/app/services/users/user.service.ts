import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL= 'http://localhost:3002/'

  constructor() { }

  async getUserId(user : User) {
    const foundUser = await  axios.get(`${this.apiURL}/users/${user.id}`)
      .then(users => {})
      .catch(e => console.error(e));
    return foundUser;
  }
  async deleteUser(user: User) {
    const foundUser = await axios.delete(`${this.apiURL}/users/${user.id}`)
        .then(e => console.log(e))
        .catch(e => console.error(e));
  }

  async updateUser(user: User){
    return await axios.patch(`${this.apiURL}/users/${user.id}`).then(res => res.data).catch(e => console.error(e));
  }
}

