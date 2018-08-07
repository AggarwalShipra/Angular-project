import { Component, OnInit } from '@angular/core';
import { Product } from '../../Schema/productSchema';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';
import { ProductService } from '../../Services/product.service';
import { UserService } from '../../Services/user.service';
import { User } from '../../Schema/userSchema';
declare var jQuery: any;
@Component({
  selector: 'app-product-detail1',
  templateUrl: './product-detail1.component.html',
  styleUrls: ['./product-detail1.component.css']
})
export class ProductDetail1Component implements OnInit {
  showCart:Boolean;
  product: Product;
  id: string;
  user: User;
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
    this.productService.getItem(this.id).subscribe((data) => {
      this.product = data;
      // console.log('fetched Data');
    })
    this.user=JSON.parse(localStorage.getItem('user'));
    this.showCart=this.user.interestedIn.includes(this.id);
  }
  addOrder() {
    if (this.userService.loggedIn()) {
      this.user = JSON.parse(localStorage.getItem('user'));
      // this.userService.addInterseted(this.user._id, this.product._id).subscribe((data) => {
      //   this.userService.haveUser(this.user.email).subscribe((data: User) => {
      //     if (data) {
      //       this.user.interestedIn = data.interestedIn;
      //       localStorage.setItem('user', JSON.stringify(this.user));
      //     }
      //   })
      //   alert("Product Added to cart Successfully.You can view the product in you cart.")
      // })
    }
    else {
      alert("Login to continue");
      jQuery("#LoginSignupModal").modal("show");
    }
  }
  addCart() {
    if (this.userService.loggedIn()) {
      this.userService.addInterseted(this.user._id, this.product._id).subscribe((data) => {
        this.userService.haveUser(this.user.email).subscribe((data: User) => {
          if (data) {
            this.user.interestedIn = data.interestedIn;
            localStorage.setItem('user', JSON.stringify(this.user));
          }
        })
        alert("Product Added to cart Successfully.You can view the product in you cart.")
      })
    }
    else {
      alert("Login to continue");
      jQuery("#LoginSignupModal").modal("show");
    }
  }
  home() {
    this.router.navigate(["/"]);
  }
}
