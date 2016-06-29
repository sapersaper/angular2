#Angular 2 Project - 7.create product service and populate product list
##create product.service
### create a sevice 
in ng2-app/src/app/products/

create file products.service.ts
```javascript
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
```

in ng2-app/src/app/products/

modify file products.component.ts
```javascript
//import ProductsRoutes
import { Product, ProductService }   from './product.service';

/@Component({
  moduleId: module.id,
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
  directives: [ROUTER_DIRECTIVES],
  //...add service as  provider
  providers: [ProductService]
})
```

in ng2-app/src/app/products/product-list/

modify file products-list.component.ts
```javascript
//replace this
export class ProductListComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
//for this
export class ProductListComponent implements OnInit {
  constructor(private userService: ProductService) { }
  products: Product[];
  ngOnInit() {
    this.userService.getProducts().then(products => this.products = products);
  }
}
```

in ng2-app/src/app/products/product-list/

modify file products-list.component.html
```html
<!-- add this -->
<ul>
  <li *ngFor="let product of products">
    <span>{{product.id}}</span> - {{product.name}}
  </li>
</ul>
```

run project -> ng serve