#Angular 2 Project - 6.create sub router for products
##create product.routes
### create a sub router 
in ng2-app/src/app/products/

create file products.routes.ts
```javascript
import { RouterConfig } from '@angular/router';
import { ProductsComponent } from './';
import { ProductDetailComponent } from './product-detail';
import { ProductListComponent } from './product-list'

export const ProductsRoutes: RouterConfig = [
    {
        path: '',
        redirectTo: '/products',
        terminal: true
    },
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            { 
                path: '', 
                component: ProductListComponent 
            },
            { 
                path: 'product-detail', 
                component: ProductDetailComponent 
            }
        ]
    }
];
```

in ng2-app/src/app/

modify file app.routes.ts
```javascript
//import ProductsRoutes
import {  ProductsRoutes } from './products/products.routes';

//replace this
{
    path: 'products',
    component: ProductsComponent
}
//for this
...ProductsRoutes
```

in ng2-app/src/app/products/

modify file products.component.ts
```javascript
//import ProductsRoutes
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
  //...add router provider as directive
  directives: [ROUTER_DIRECTIVES]
})
```

in ng2-app/src/app/products/

modify file products.component.html
```html
<!-- add this -->
<nav>
  <a [routerLink]="['/products']">Product List</a>
  <a [routerLink]="['/products/product-detail']">Product Detail</a>
</nav>
<router-outlet></router-outlet>
```

run project -> ng serve