import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductMedia } from 'src/app/models/productMedia.model';
import { Product } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-user-post-product',
  templateUrl: './user-post-product.component.html',
  styleUrls: ['./user-post-product.component.css']
})
export class UserPostProductComponent implements OnInit {

  newProduct: Product = { name: '', description: '', day_start: new Date, day_finish: new Date, medias: [], userId: 0 }

  constructor(private productsService: ProductsService, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  create() {
    this.productsService.create(this.newProduct)
      .then(newProuct => {
        this.toastr.success('Se ha creado con éxito el producto ' + this.newProduct.name);
      }).catch(e => {
        this.toastr.error('Ha ocurrido un error con la creación del producto ' + this.newProduct.name);
      });
  }
  processFile(event:any) {
    const size = event.target.files.length;
    for (let i = 0; i < size; i++) {
      const reader = new FileReader();
      reader.onload = (event:any) => {
        console.log(event.target.result);
        //event.target.result
        const media : ProductMedia = {uri : 'a'};
          this.newProduct.medias.push(media); 
      }
      reader.readAsDataURL(event.target.files[i]);
    }
  }
}
