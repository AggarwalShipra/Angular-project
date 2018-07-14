import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { LoginComponent } from './login-signup/login/login.component';
import { SignupComponent } from './login-signup/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDashboardComponent } from './product/product-dashboard/product-dashboard.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductDetail2Component } from './product/product-detail2/product-detail2.component';
import { UserService } from './Services/user.service';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginSignupComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CarouselComponent,
    HeaderComponent,
    AboutComponent,
    DashboardComponent,
    ProductDashboardComponent,
    ProductDetailComponent,
    ProductDetail2Component,
    AdminComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  AppRoutingModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
