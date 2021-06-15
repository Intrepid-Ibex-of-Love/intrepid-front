import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product :Product = {
    id: 0,
    product_name: '',
    category: '',
    description: '',
    day_start: new Date,
    day_finish: new Date,
    photo: '',
    userId: 0
  };
  
  range = new FormGroup({
    start: new FormControl(Validators.required),
    end: new FormControl(Validators.required)
  });
  allCategories = [
    'Tecnología',
    'Hogar',
    'Motor',
    'Deportes',
    'Alimentación',
    'Servicios'
  ];
  constructor(private route : ActivatedRoute, private productService:ProductsService) {
    
  }

  ngOnInit(): void {
    this.getProduct();
  }

  async getProduct(){
    let id = this.route.snapshot.paramMap.get('id') as string;
    this.product = await this.productService.getOne(id);
    console.log(this.product);
    console.log(id);

  }
  updateProduct(){
    this.productService.updateProduct(this.product).then(data => {
      console.log('maquina');
    })
  }

}
