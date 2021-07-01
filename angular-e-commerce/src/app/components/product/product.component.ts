import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductModel, NewProduct } from 'src/app/models/productmodel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product = new ProductModel()
  getProduct(){return this.product.products.name,this.product.products.price}
  addProduct(name:string,price:number){
    if (name != ""){
      this.product.products.push(new NewProduct(name,price));
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
