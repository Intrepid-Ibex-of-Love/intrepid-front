import { Injectable } from '@angular/core';
import axios from 'axios';
import { Categories } from '../../models/categories.model'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  apiURL= 'http://localhost:3002/categories'

  constructor() { }
  
  getAllCategories(): Promise<Categories[]> {
    return axios.get(this.apiURL).then(res => res.data).catch(e => console.error(e));
  }
  setProductCategory(category: string, productID: number) {
    return axios.post(this.apiURL, category).then(res => res.data).catch(e => console.error(e));
  }
}
