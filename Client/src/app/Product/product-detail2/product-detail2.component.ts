import { Component, OnInit } from '@angular/core';
import { Product } from '../../Schema/productSchema';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-product-detail2',
  templateUrl: './product-detail2.component.html',
  styleUrls: ['./product-detail2.component.css']
})
export class ProductDetail2Component implements OnInit {
  product: Product;
  id: String;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
    this.productService.getItem(this.id).subscribe((data) => {
      this.product = data;
    })
  }
}
