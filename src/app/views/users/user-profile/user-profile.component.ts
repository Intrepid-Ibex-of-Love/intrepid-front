import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { User } from 'src/app/models/user.model';
import { ProductsService } from 'src/app/services/products/products.service';
import axios from 'axios';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user : User = {id: 0, name: '', last_name: '', email: '', password: '', photo_user:'', post_code: 0, ranking: 0, role: '' } 
  allProducts : Product [] = [];

  constructor(private productsService: ProductsService) { 
      let userLogin = JSON.parse(localStorage.getItem('user') || '{}');
      let token = localStorage.getItem('token');
      this.user = userLogin;
    }

  ngOnInit(): void {
    this.productsService.getAllProducts().then(data => {
      this.allProducts = data;
      console.log(this.allProducts);
    });
    
  }

}
