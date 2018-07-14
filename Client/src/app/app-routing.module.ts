import { NgModule } from "../../node_modules/@angular/core";
import { RouterModule, Routes } from "../../node_modules/@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ProductDashboardComponent } from "./product/product-dashboard/product-dashboard.component";
import { ProductDetailComponent } from "./product/product-detail/product-detail.component";
import { AdminComponent } from "./admin/admin.component";
import { AddProductComponent } from "./admin/add-product/add-product.component";

const appRoutes:Routes=[
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"products",component:ProductDashboardComponent},
    {path:"product",component:ProductDetailComponent},
    {path:"admin",component:AdminComponent,children:[
        {path:"addProduct",component:AddProductComponent}
    ]}
  ];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}