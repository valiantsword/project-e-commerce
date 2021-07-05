import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductModel, NewProduct } from 'src/app/models/productmodel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  authenticated: boolean = false; //For admin login
  userName: string = '';
  password: string = '';

  product = new ProductModel();
  name: string = '';
  price: number = 0;

  cartItem: number = 0;

  getProduct() {
    return this.product.products;
  } //For get products from product

  addProduct() {
    console.log(this.name, this.price); //To get values from console

    if (this.name != '' && this.price > 0) {
      this.product.products.push(new NewProduct(this.name, this.price));
    } //
  } //For add a new product

  checkUser() {
    console.log(this.name, this.price);
    if (this.userName == 'admin' && this.password == 'admin') {
      this.authenticated = true;
    }
  } /*To check if the admin's login values are correct. This process runs statically.
  I might add a database to make this process dynamic, so things like registration will also be possible too.*/
  constructor() {}

  ngOnInit(): void {}
}
