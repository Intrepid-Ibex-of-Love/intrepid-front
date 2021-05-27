import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerUserComponent } from './components/banner-user/banner-user.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  /*Rutas para users*/
/*   {
    path:'/user-profile',
    component: BannerUserComponent
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
