import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { User } from 'src/app/models/user.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user : User = {id: 0, name: '', last_name: '', email: '', password: '', photo_user:'', post_code: 0, ranking: 0, role: '' } 
  allProducts : Product [] = [];
  mySrc : any;
  constructor(private productsService: ProductsService, private toastr: ToastrService, private sanitizer : DomSanitizer ) { 
    let userLogin = JSON.parse(localStorage.getItem('user') || '{}');
    let token = localStorage.getItem('token');
    this.user = userLogin;
  }

  ngOnInit(): void { 
    
    this.getAllData();
  }

  getAllData(){
    this.productsService.getAllProductsById(this.user.id).then(data => {
      this.allProducts = data
    });
  }
  
  toBase64(arr : any){
    console.log(arr.data);
    let base64 = btoa(
      arr.data.reduce((data : any, byte : any) => data + String.fromCharCode(byte), '')
    );
    return this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + base64);
  }

  deleteProduct(id : number){
    this.productsService.deleteProduct(id).then(data => {
      this.toastr.success('El producto se ha borrado con éxito')
      
      this.getAllData();

    }).catch(error => this.toastr.error('Hay un error en el borrado del producto'));
  }
}
