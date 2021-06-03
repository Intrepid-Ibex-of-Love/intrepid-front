import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UserPostProductComponent } from './views/users/user-post-product/user-post-product.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { UserProfileComponent } from './views/users/user-profile/user-profile.component';



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
    component: UserProfileComponent,
    canActivate: [AuthGuard]
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
