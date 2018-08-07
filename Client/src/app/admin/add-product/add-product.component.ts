import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../../Schema/productSchema';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;
  submitted: Boolean;
  product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.submitted = false;
    this.product = new Product();
    this.addProductForm = new FormGroup({
      'modelName': new FormControl(null, Validators.required),
      'companyName': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
      'screenSize': new FormControl(null, Validators.required),
      'ram': new FormControl(null, Validators.required),
      'rom': new FormControl(null, Validators.required),
      'expandableMemory': new FormControl(null, Validators.required),
      'frontCamera': new FormControl(null, Validators.required),
      'backCamera': new FormControl(null, Validators.required),
      'battery': new FormControl(null, Validators.required),
      'batteryType': new FormControl('true', Validators.required),
      'twoG': new FormControl('true', Validators.required),
      'threeG': new FormControl('true', Validators.required),
      'fourG': new FormControl('true', Validators.required),
      'wifi': new FormControl('true', Validators.required),
      'usb': new FormControl('true', Validators.required),
      'music': new FormControl('true', Validators.required),
      'video': new FormControl('true', Validators.required),
      'fm': new FormControl('true', Validators.required),
      'stock': new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      'color': new FormControl(null, [Validators.required, Validators.pattern('[a-z A-Z]*')]),
      'price': new FormControl(null, [Validators.required, Validators.min(0)]),
      'operatingSystem': new FormControl(null, Validators.required),
      'simType': new FormControl('Single', Validators.required),
      'warranty': new FormControl(null,Validators.required),
      'description': new FormControl('')
    })
  }
  onAdd() {
    if (this.addProductForm.valid) {
      this.product.model_name = this.addProductForm.get('modelName').value;
      this.product.company = this.addProductForm.get('companyName').value;
      this.product.image = this.addProductForm.get('image').value;
      this.product.screen_size = this.addProductForm.get('screenSize').value;
      this.product.ram = this.addProductForm.get('ram').value;
      this.product.rom = this.addProductForm.get('rom').value;
      this.product.memory = this.addProductForm.get('expandableMemory').value;
      this.product.front_camera = this.addProductForm.get('frontCamera').value;
      this.product.back_camera = this.addProductForm.get('backCamera').value;
      this.product.battery = this.addProductForm.get('battery').value;
      this.product.battery_type = this.addProductForm.get('batteryType').value;
      this.product.two_g = this.addProductForm.get('twoG').value;
      this.product.three_g = this.addProductForm.get('threeG').value;
      this.product.four_g = this.addProductForm.get('fourG').value;
      this.product.wifi = this.addProductForm.get('wifi').value;
      this.product.usb = this.addProductForm.get('usb').value;
      this.product.music = this.addProductForm.get('music').value;
      this.product.video = this.addProductForm.get('video').value;
      this.product.fm = this.addProductForm.get('fm').value;
      this.product.color = this.addProductForm.get('color').value;
      this.product.price = this.addProductForm.get('price').value;
      this.product.stock = this.addProductForm.get('stock').value;
      this.product.operating_system = this.addProductForm.get('operatingSystem').value;
      this.product.warranty = this.addProductForm.get('warranty').value;
      this.product.sim_type = this.addProductForm.get('simType').value;
      this.product.desc = this.addProductForm.get('description').value;
      this.productService.addProduct(this.product)
        .subscribe((data) => {
          if (data) {
            alert('Product Successfully Added');
            this.addProductForm.reset();
            this.submitted=false;
          }
          if (!data) {
            alert('Product not Added');
          }
        });
      console.log(this.product);
    }
    else
      this.submitted = true;
  }
  pageReset() {
    this.submitted = false;
  }
}

