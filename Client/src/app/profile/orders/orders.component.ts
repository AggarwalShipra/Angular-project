import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Schema/productSchema';
import { User } from '../../Schema/userSchema';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  user: User
  product: Product[];
  constructor(private userService: UserService, private productService: ProductService,private router:Router) { }

  ngOnInit() {
    if (this.userService.loggedIn()) {
      this.product = [];
      this.user = JSON.parse(localStorage.getItem("user"));
      console.log(this.user);
      for (let x of this.user.bought) {
        this.productService.getItem(x).subscribe((data) => {
          this.product.push(data);
        })
      }
    }
  }
  shop() {
    this.router.navigate(["/"]);
  }
}

