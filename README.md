#Angular 2 Project - 10.Add guard that detect route access
### add and modify files 
in ng2-app/src/app/guards/

create file activate.guard.ts
```javascript

import { CanActivate } from '@angular/router';

export class ActivateGuard implements CanActivate {
  canActivate() {
    console.log('ActivateGuard#canActivate called');
    return true;
  }
} 
```



in ng2-app/src/

modify file main.ts
```javascript
bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  //bootstra guard
  ActivateGuard
])
.catch(err => console.error(err));
```

in ng2-app/src/app/products/

modify file product.routes.ts

```javascript
//import guard
import { ActivateGuard } from '../guards/activate.guard';

{
  path: 'products',
  component: ProductsComponent,
  //add guard
  canActivate: [ActivateGuard],
  children: [
      { 
          path: '', 
            
```