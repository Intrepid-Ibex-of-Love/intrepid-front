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
    EditUserComponent
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
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
