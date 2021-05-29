import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  routeProduct= 'http://localhost:3002/products'
  constructor() { }

  getAllProducts(){
    return axios.get(this.routeProduct).then(products => products.data.results);
  }
  getProductsUser(){
    return axios.get(this.routeProduct).then(products => products.data.results);
  }
  putProductsUsers(){
    return axios.put(this.routeProduct+"").then();
  }
}
