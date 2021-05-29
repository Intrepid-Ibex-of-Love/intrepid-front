import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-user-post-product',
  templateUrl: './user-post-product.component.html',
  styleUrls: ['./user-post-product.component.css']
})
export class UserPostProductComponent implements OnInit {

  newProduct : Product = {name: '', description: '', day_start: new Date, day_finish: new Date, photo: '', userId: 0}

  constructor(private productsService : ProductsService, private toastr: ToastrService) { }
  
  ngOnInit(): void {

  }

  create(){
    this.productsService.create(this.newProduct)
    .then(newProuct => {
        this.toastr.success('Se ha creado con éxito el artículo '+this.newProduct.name); 
    }).catch(e => {
        this.toastr.error('Ha ocurrido un error con la creación del producto '+this.newProduct.name); 
    });
  }
}
