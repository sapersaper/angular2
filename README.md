#Angular 2 Project - 8.view details for each products
### modify files 
in ng2-app/src/app/products/

modify file products.routes.ts
```javascript
//replace this
path: 'product-detail', 

//for this
path: ':id', 
```



in ng2-app/src/app/products/

modify file products.component.html
```html
<!-- remove this -->
<nav>
  <a [routerLink]="['/products']">Product List</a>
  <a [routerLink]="['/products/product-detail']">Product Detail</a>
</nav>
```

in ng2-app/src/app/products/product-detail/

modify file product-detail.component.ts

```javascript
//import this modules
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { Product, ProductService } from '../product.service';

@Component({
  moduleId: module.id,
  selector: 'app-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css'],
  //add ProductService as provider
  providers: [ProductService]
})

//replace this
export class ProductDetailComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}

//for this
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: Product;
  editProductName: string;
  private sub: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProductService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.service.getProduct(id)
        .then(product => {
          this.product = product;
          this.editProductName = product.name;
        });
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  gotoProducts() {
    this.router.navigate(['/products']);
  }
  cancel() {
    this.gotoProducts();
  }
  save() {
    this.product.name = this.editProductName;
    this.gotoProducts();
  }
}
```

in ng2-app/src/app/products/product-detail/

modify file product-detail.component.html
```html
<!-- add this -->
<div *ngIf="product">
    <h3>"{{product.name}}"</h3>
    <div>
      <label>Id: </label>{{product.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editProductName" placeholder="name" size="40"/>
    </div>
    <p>
      <button (click)="cancel()">Cancel</button>
      <button (click)="save()">Save</button>
    </p>
  </div>
```
in ng2-app/src/app/products/product-detail/

modify file product-detail.component.spec.ts

```javascript
//add this
//define params
var router, activatedRoute, productService;

//replace this
let component = new ProductDetailComponent();

//for this
    let component = new ProductDetailComponent(router, activatedRoute, productService);
```

in ng2-app/src/app/products/product-list/

modify file product-list.component.ts
```javascript
//import this
import { Router } from '@angular/router';

//replace this
export class ProductListComponent implements OnInit {
  constructor(private userService: ProductService) { }
  products: Product[];
  ngOnInit() {
    this.userService.getProducts().then(products => this.products = products);
  }
}

//for this
export class ProductListComponent implements OnInit {
  constructor(private userService: ProductService, private router: Router) { }
  products: Product[];
  ngOnInit() {
    this.userService.getProducts().then(products => this.products = products);
  }
  onSelect(product: Product) {
    this.router.navigate(['/products', product.id]);
  }
}
```

in ng2-app/src/app/products/product-list/

modify file product-list.component.html
```html
<!-- replace this -->
<li *ngFor="let product of products">

<!-- for this -->
 <li *ngFor="let product of products" (click)="onSelect(product)">
```

in ng2-app/src/app/products/product-list/

modify file product-list.component.spec.ts

```javascript
//add this
//define params
var router, activatedRoute, productService;

//replace this
let component = new ProductListComponent();

//for this
    let component = new ProductListComponent(productService, router);
```