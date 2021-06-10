import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/services/products/products.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';

import { User } from 'src/app/models/user.model';
import { Medias } from 'src/app/models/productMedia.model';
import { Product } from 'src/app/models/products.model';
import { Categories } from '../../../models/categories.model';

@Component({
  selector: 'app-user-post-product',
  templateUrl: './user-post-product.component.html',
  styleUrls: ['./user-post-product.component.css']
})
export class UserPostProductComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  newProduct: Product = { 
    id: 0, 
    product_name: '',
    category: '',
    description: '', 
    day_start: new Date, 
    day_finish: new Date, 
    medias: [], 
    userId: 0 
  };

  userLogin;
  selectedValue = "";
  allCategories = [
    'Tecnología', 
    'Hogar', 
    'Motor', 
    'Deportes', 
    'Alimentación', 
    'Servicios'
  ];

  constructor( private productsService: ProductsService, private toastr: ToastrService) {
    this.userLogin = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit(): void {}

  postProduct() {
    this.newProduct.userId = this.userLogin.id;
    this.newProduct.day_start = new Date(this.range.value.start);
    this.newProduct.day_finish = new Date(this.range.value.end);
    this.productsService.create(this.newProduct)
      .then(data => {
        if(!this.newProduct.product_name || !this.newProduct.description){
          this.toastr.error('Ha ocurrido un error con la creación del producto ' + this.newProduct.product_name);    
        }else{
          this.toastr.success('Se ha creado con éxito el producto ' + this.newProduct.product_name);
        }})
      .catch(e => {
        this.toastr.error('Ha ocurrido un error con la creación del producto ' + this.newProduct.product_name);
      });
  }
  
  processFile(event:any) {
    const size = event.target.files.length;
    for (let i = 0; i < size; i++) {
      const reader = new FileReader();
      reader.onload = (event:any) => {
        console.log(event.target.result);
        const media : Medias = {uri: event.target.result};
        this.newProduct.medias.push(media); 
      }
      reader.readAsDataURL(event.target.files[i]);
    }
  }
}
