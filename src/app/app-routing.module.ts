import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UserPostProductComponent } from './views/users/user-post-product/user-post-product.component';
import { UserProductsComponent } from './views/users/user-products/user-products.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  /*Login */
  {
    path:'sign-in',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  /*Rutas para users*/
  {
    path:'user-profile',
    component: UserProductsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
