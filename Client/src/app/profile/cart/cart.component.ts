import { Component, OnInit } from '@angular/core';
import { User } from '../../Schema/userSchema';
import { UserService } from '../../Services/user.service';
import { Product } from '../../Schema/productSchema';
import { ProductService } from '../../Services/product.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
user:User;
product:Product[];  
  constructor(private userService:UserService,private productService:ProductService,private router:Router) { }

  ngOnInit() {
    if(this.userService.loggedIn())
    {
      this.product=[];
      this.user=JSON.parse(localStorage.getItem("user"));
      // console.log(this.user);
      // console.log(this.user.interested);
      for(let x of this.user.interestedIn)
      {
        this.productService.getItem(x).subscribe((data)=>{
          console.log(data);
          this.product.push(data);
        })
      }
      // console.log(this.product);
    }
  }
  shop()
  {
this.router.navigate(["/"]);
  }
  open(id)
  {
    this.router.navigate(["/product",id])
  }
}
