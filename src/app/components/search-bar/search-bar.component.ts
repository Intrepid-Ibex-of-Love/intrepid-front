import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchField: string = "";
  products: Product[] = [];
  allProducts: Product[] = [];

  constructor(private productService: ProductsService) {
    this.searchField = "";
  }

  ngOnInit(): void {
    this.productService.getAllProducts().then(data => {
      this.allProducts = data;
    });
  }
  search() {
    if (this.searchField === "") {
      this.products = this.allProducts;
    } else {
      this.products = this.allProducts.filter(element => element.product_name.toLowerCase() === this.searchField.toLowerCase());
    }
  }
}
