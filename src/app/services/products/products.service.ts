import { Injectable } from '@angular/core';
import axios from 'axios';
import { Product } from 'src/app/models/products.model';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  apiURL= 'http://localhost:3002/products'


  constructor() { }

  getAllProducts() {
    return axios.get(this.apiURL).then(products => products.data).catch(e => console.error(e));
  }
  create(product: Product){
    return axios.post(this.apiURL, product).then(res => res.data).catch(e => console.error(e));
  }

  deleteProduct(id: number){
    return axios.delete(this.apiURL+"/"+id).then(res => res.data).catch(e => console.error(e));
  }
  getAllProductsById(id: number) {
    return axios.get(this.apiURL+"/user/"+id).then(res => res.data).catch(e => console.error(e));
  }
  getOne(id:string){
    return axios.get(this.apiURL+"/"+id).then(product => product.data).catch(e => console.error(e));
  }
  updateProduct(product: Product){
    return axios.put(this.apiURL, product).then(res => res.data).catch(e => console.error(e));

  }
}
