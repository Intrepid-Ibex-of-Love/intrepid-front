import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerUserComponent } from './components/banner-user/banner-user.component';
import { HomeComponent } from './views/home/home.component';
import { UserPostProductComponent } from './views/users/user-post-product/user-post-product.component';
import { UserProductsComponent } from './views/users/user-products/user-products.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  /*Rutas para users*/
  {
    path:'user-profile',
    component: UserProductsComponent
  },
  {
    path:'new-post',
    component: UserPostProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
