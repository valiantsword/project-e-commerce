import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductModel, NewProduct } from 'src/app/models/productmodel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  name: string = '';
  price: number = 0;
  cartItem: number = 0;
  authenticated: boolean = false;
  userName: string = '';
  password: string = '';

  product = new ProductModel();
  getProduct() {
    return this.product.products;
  }
  addProduct() {
    console.log(this.name, this.price);

    if (this.name != '' && this.price >= 0) {
      this.product.products.push(new NewProduct(this.name, this.price));
    }
  }
  checkUser() {
    console.log(this.name, this.price);
    if (this.userName == 'admin' && this.password == 'admin') {
      this.authenticated = true;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
