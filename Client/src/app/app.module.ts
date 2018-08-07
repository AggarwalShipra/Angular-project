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
import { UserService } from './Services/user.service';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetail1Component } from './product/product-detail1/product-detail1.component';
import { ProductDetail2Component } from './product/product-detail2/product-detail2.component';
import { ProductDashboardComponent } from './product/product-dashboard/product-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { PathGuard } from './Guards/path-guard.service';
import {AdminGuardService} from './Guards/admin-guard.service';
import { CartComponent } from './profile/cart/cart.component';
import { OrdersComponent } from './profile/orders/orders.component';
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
    AdminComponent,
    AddProductComponent,
    ProductDetail1Component,
    ProductDetail2Component,
    ProductDashboardComponent,
    PageNotFoundComponent,
    ProfileComponent,
    CartComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  AppRoutingModule],
  providers: [UserService,PathGuard,AdminGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
