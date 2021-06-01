import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {


  user : User = {id: 0, name: '', last_name: '', email: '', password: '', photo_user:'', post_code: 0, ranking: 0, role: '' } 
  constructor() { 
      let userLogin = JSON.parse(localStorage.getItem('user') || '{}');
      let token = localStorage.getItem('token');
      this.user = userLogin;
    }

  ngOnInit(): void {
  }
  
}
