export class ProductModel {
  products: any; //Creation of products

  constructor() { 
    this.products = [
      new NewProduct('Ayakkabı', 15.5), //Add some products
      new NewProduct('Tişört', 5.5),
      new NewProduct('Pantolon', 10.5),
    ];
  }
}
export class NewProduct { //Product's model
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
