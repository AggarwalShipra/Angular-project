import { Component, OnInit } from '@angular/core';
import { Product } from '../../Schema/productSchema';
import { ProductService } from '../../Services/product.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  products:Product[]
  constructor(private productService:ProductService,
    private route:Router) { }

  ngOnInit() {
    this.productService.getProduct().subscribe((data:Product[])=>{
      this.products=data;
    })
  }
  getItem(id:String)
  {
    this.route.navigate(['/product',id]);
  }
}