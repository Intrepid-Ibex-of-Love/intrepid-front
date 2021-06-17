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
  src : any;
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
      console.log(data[0].photo);
      
    });
  }
  
  
  BufferToBase64(arr : any){
    console.log(arr.data);

    var binary = '';
    var byte = new Uint8Array( arr.data );
    var byteLen = byte.byteLength;
    for (var i = 0; i < byteLen; i++) {
        binary += String.fromCharCode( byte[ i ] );
    }
    return this.src = btoa( binary )


   /*  return btoa(
      arr.data.reduce((data : any, byte : any) => data + String.fromCharCode(byte), '')
    ); */
    //return this.sanitizer.bypassSecurityTrustHtml(`data:image/jpeg;base64,${base64}`);
    //return this.sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${base64}`);
    //return this.sanitizer.bypassSecurityTrustScript(`data:image/jpeg;base64,${base64}`);
    //return this.src = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/jpeg;base64,${base64}`);

  }  


  deleteProduct(id : number){
    this.productsService.deleteProduct(id).then(data => {
      this.toastr.success('El producto se ha borrado con éxito')
      
      this.getAllData();

    }).catch(error => this.toastr.error('Hay un error en el borrado del producto'));
  }
}
