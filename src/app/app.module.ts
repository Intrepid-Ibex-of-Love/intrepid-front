import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { BannerUserComponent } from './components/banner-user/banner-user.component';
import { UserPostProductComponent } from './views/users/user-post-product/user-post-product.component';
import { HeaderComponent } from './components/header/header.component';
import { UserProfileComponent } from './views/users/user-profile/user-profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdminsComponent } from './views/admins/admins.component';
import { SettingsComponent } from './views/settings/settings.component';
import { EditUserComponent } from './views/settings/edit-user/edit-user.component';
import { RecordarContrasenaComponent } from './components/recordar-contrasena/recordar-contrasena.component';
import { ImgUploadComponent } from './components/img-upload/img-upload.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchPipe } from './pipes/search.pipe';
import { EditProductComponent } from './views/users/edit-product/edit-product.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ProductDetailComponent } from './views/products/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    BannerUserComponent,
    UserPostProductComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserProfileComponent,
    MenuComponent,
    AdminsComponent,
    SettingsComponent,
    EditUserComponent,
    RecordarContrasenaComponent,
    ImgUploadComponent,
    SearchBarComponent,
    SearchPipe,
    EditProductComponent,
    AboutUsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    TextFieldModule,
    MatToolbarModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
