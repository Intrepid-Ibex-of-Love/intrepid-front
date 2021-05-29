import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-user-post-product',
  templateUrl: './user-post-product.component.html',
  styleUrls: ['./user-post-product.component.css']
})
export class UserPostProductComponent implements OnInit {

  newProduct : Product = {name: '', description: '', day_start: 0, day_finish: 0, photo: '', userId: 0}
  message : string = '';

  constructor(private productsService : ProductsService) { }
  
  ngOnInit(): void {

  }

  create(){
   // console.log(this.newProduct);
    this.productsService.create(this.newProduct)
    .then(newProuct => {
        console.log(this.newProduct);
        
        //this.message = "Se ha creado con éxito el artículo"+newProuct.name;
    }).catch(e => {
      alert('po creo que no');
    });
  }
}
