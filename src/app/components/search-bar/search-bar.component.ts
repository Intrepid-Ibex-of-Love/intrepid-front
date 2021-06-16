import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { FormControl } from '@angular/forms';

import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchField: string = "";
  products: Product[] = [];
  allProducts: Product[] = [];

  search = new FormControl('');
  @Output('search') searchEmitter = new EventEmitter<string>()

  constructor(private productService: ProductsService) {
    this.searchField = "";
  }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(debounceTime(270))
    .subscribe(value=> this.searchEmitter.emit(value))
  }
}
