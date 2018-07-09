import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

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
const appRoutes:Routes=[
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"account",component:LoginSignupComponent,children:[
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent}
  ]}
];
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
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
