import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private route : ActivatedRoute, private productService:ProductsService, private toastr: ToastrService, private router: Router) {
    
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
    console.log(this.product);
    this.productService.updateProduct(this.product).then(data => {
      this.toastr.success('Se ha modificado con éxito el producto ' + this.product.product_name);
      this.router.navigate(['/user-profile'])
    });
  }
  processFile(event: any){
    
    const size = event.target.files.length;
    for (let i = 0; i < size; i++) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        console.log(event.target.result);
        this.product.photo = event.target.result;
        //this.postProduct();
        console.log(this.product.photo);
      }
      reader.readAsDataURL(event.target.files[i]);
    }
  }

}
