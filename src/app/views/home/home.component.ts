import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products/products.service';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  allProducts: Product[] = [];

  handleSearch(value: string){
    this.filtro_valor = value
  }

  filtro_valor = ''

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getAllProducts().then(data => {
      this.products = data;
    });
  }

}
