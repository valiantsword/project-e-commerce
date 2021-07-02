export class ProductModel {
  products: any;

  constructor() {
    this.products = [
      new NewProduct('Ayakkabı', 15.5),
      new NewProduct('Tişört', 5.5),
      new NewProduct('Pantolon', 10.5),
    ];
  }
}
export class NewProduct {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
