import { Injectable } from '@angular/core';
export class Product {
  constructor(public id: number, public name: string) { }
}

let PRODUCT = [
  new Product(1, 'HyperTough 50 Piece Screwdriver Set'),
  new Product(2, 'Stanley 22-Piece Hex Key Set, 85-753'),
  new Product(3, 'Camco Leveling Scissor Jack Drill Socket'),
  new Product(4, '18-Piece Combination Wrench Set'),
  new Product(5, 'HyperTough 8-Piece Hobby Clamp Set'),
  new Product(6, 'Hyper Tough 40-Piece Socket Set')
];

let productPromise = Promise.resolve(PRODUCT);
@Injectable()
export class ProductService {

  constructor() {}

  getProducts() { return productPromise; }
  getProduct(id: number | string) {
    return productPromise
      .then(product => product.filter(p => p.id === +id)[0]);
  }

}