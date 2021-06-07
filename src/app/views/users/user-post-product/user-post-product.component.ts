import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Medias } from 'src/app/models/productMedia.model';
import { Product } from 'src/app/models/products.model';
import { User } from 'src/app/models/user.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-user-post-product',
  templateUrl: './user-post-product.component.html',
  styleUrls: ['./user-post-product.component.css']
})
export class UserPostProductComponent implements OnInit {

  newProduct: Product = { id: 0, product_name: '', description: '', day_start: new Date, day_finish: new Date, medias: [], userId: 0 }
  userLogin;

  constructor(private productsService: ProductsService, private toastr: ToastrService) {
    this.userLogin = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit(): void { }

  create() {
    this.newProduct.userId = this.userLogin.id;
    this.productsService.create(this.newProduct)
      .then(newProuct => {
        if(!this.newProduct.product_name || !this.newProduct.description){
          this.toastr.error('Ha ocurrido un error con la creación del producto ' + this.newProduct.product_name);    
        }else{
          this.toastr.success('Se ha creado con éxito el producto ' + this.newProduct.product_name);

        }
      }).catch(e => {
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
