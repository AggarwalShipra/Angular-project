import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { AdminComponent } from "./admin/admin.component";
import { AddProductComponent } from "./admin/add-product/add-product.component";
import { ProductDetail1Component } from "./product/product-detail1/product-detail1.component";
import { ProductDashboardComponent } from "./product/product-dashboard/product-dashboard.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProfileComponent } from "./profile/profile.component";
import { PathGuard } from "./Guards/path-guard.service";
import { AdminGuardService } from "./Guards/admin-guard.service";
import { CartComponent } from "./profile/cart/cart.component";
import { OrdersComponent } from "./profile/orders/orders.component";

const appRoutes:Routes=[
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"products",component:ProductDashboardComponent},
    {path:"product/:id",component:ProductDetail1Component},
    {path:"admin",component:AdminComponent,canActivate:[AdminGuardService],children:[
        {path:"addProduct",component:AddProductComponent}
    ]},
    {path:"profile",component:ProfileComponent,canActivate:[PathGuard]},
    {path:"cart",component:CartComponent,canActivate:[PathGuard]},
    {path:"order",component:OrdersComponent,canActivate:[PathGuard]},
    {path:"**",component:PageNotFoundComponent}
  ];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{
}