import { Component, OnInit } from '@angular/core';
import { Product } from '../Schema/productSchema';
import { ProductService } from '../Services/product.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  product:Product[];
  constructor(private productService:ProductService,private route:Router) { }

  ngOnInit() {
    this.productService.getProduct().subscribe((data)=>{
      if(data.length<=10)
      this.product=data;
      else if(data.length>10)
      {
        this.product= data.sort(() => .5 - Math.random()).slice(0,10);
      }
    })
  }
  getItem(id:String)
  {
    this.route.navigate(['/product',id]);
  }

}
