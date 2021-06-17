import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL= 'http://localhost:3002/'
  isAuthenticate = false;
  constructor() { }

  async getUserId(user : User) {
    const foundUser = await  axios.get(`${this.apiURL}/users/${user.id}`)
      .then(users => {})
      .catch(e => console.error(e));
    return foundUser;
  }

  async updateUser(editUser: {id: number,name: string, last_name: string,post_code: string, email: string, password: string}) {
    console.log(editUser)
    const foundUser = await  axios.patch(`${this.apiURL}users/${editUser.id}`,editUser)
      .then(res => {
          
          let user = res.data;
          localStorage.setItem('user', JSON.stringify(user));
          this.isAuthenticate = true;
          return {
            status: true,
            error: 'Perfil Actualizado'
          };
      })
      .catch(e =>{
        return {
          status: false,
          error: 'Ha ocurrido un error'
        };
      });
    return foundUser;
  }

  async deleteUser(user: User) {
    const foundUser = await axios.delete(`${this.apiURL}/users/${user.id}`)
        .then(e => console.log(e))
        .catch(e => console.error(e));
  }
}

