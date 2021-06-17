import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/products.model';
import { User } from 'src/app/models/user.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  user: User;
  constructor(private route : ActivatedRoute, private productService:ProductsService, private toastr: ToastrService, private router: Router) {
    let userLogin = JSON.parse(localStorage.getItem('user') || '{}');
    let token = localStorage.getItem('token');
    this.user = userLogin;
  }
  product :Product = {
    id: 0,
    product_name: '',
    category: '',
    description: '',
    day_start: new Date,
    day_finish: new Date,
    photo: '',
    userId: 0,
    requiredBy: 0
  };
  ngOnInit(): void {
    this.getProduct();
  }
  
  async getProduct(){
    let id = this.route.snapshot.paramMap.get('id') as string;
    this.product = await this.productService.getOne(id);

  }
  requestProduct(){
    this.product.requiredBy = this.user.id;
    this.productService.updateProduct(this.product).then(res => {
      this.toastr.success('Solicitud creada con éxito');
    }).catch(error => {
      this.toastr.error('Hubo un error con la solicitud del producto');
    }) 
  }
}
