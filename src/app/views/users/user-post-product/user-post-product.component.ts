import { ProductsService } from 'src/app/services/products/products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/products.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-post-product',
  templateUrl: './user-post-product.component.html',
  styleUrls: ['./user-post-product.component.css']
})
export class UserPostProductComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(Validators.required),
    end: new FormControl(Validators.required)
  });

  newProduct: Product = {
    id: 0,
    product_name: '',
    category: '',
    description: '',
    day_start: new Date,
    day_finish: new Date,
    photo: '',
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
  private image : any;

  constructor(private productsService: ProductsService, private toastr: ToastrService, private router: Router) {
    this.userLogin = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit(): void { }

  postProduct() {
    if (this.range.valid) {
      this.newProduct.userId = this.userLogin.id;
      this.newProduct.day_start = new Date(this.range.value.start);
      this.newProduct.day_finish = new Date(this.range.value.end);
      
      this.productsService.create(this.newProduct)
        .then(data => {
          if (!this.newProduct.product_name || !this.newProduct.description) {
            this.toastr.error('Ha ocurrido un error con la creación del producto ' + this.newProduct.product_name);
          } else {
            this.toastr.success('Se ha creado con éxito el producto ' + this.newProduct.product_name);
            this.router.navigate(['/user-profile'])
          }
        })
        .catch(e => {
          this.toastr.error('Ha ocurrido un error con la creación del producto ' + this.newProduct.product_name);
        });
    }
  }
  processFile(event: any){
    
    const size = event.target.files.length;
    for (let i = 0; i < size; i++) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        console.log(event.target.result);
        this.newProduct.photo = event.target.result;
        //this.postProduct();
        console.log(this.newProduct.photo);
      }
      reader.readAsDataURL(event.target.files[i]);
    }
  }
  
  deleteProduct(id : number){
    console.log(id);
  }
  seeProduct(id : number){
    console.log(id);
  }

}