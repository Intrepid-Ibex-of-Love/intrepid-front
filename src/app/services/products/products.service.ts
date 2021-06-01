import { Injectable } from '@angular/core';
import axios from 'axios';
import { Product } from 'src/app/models/products.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiURL= 'http://localhost:3002/products'

  constructor() { }

  getAllProducts(){
    return axios.get(this.apiURL).then(products => products.data);
  }
  
  create(product : Product){
    return axios.post(this.apiURL, product).then(res => res.data).catch(e => console.error(e));
  }
}
