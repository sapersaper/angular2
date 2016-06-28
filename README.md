Angular 2 Project
=======

#4.create a simple router
## add file and update
###add route and code

in ng2-app/src/app/app.routes.ts

```javascript
//add this
import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from './home';
import { ProductsComponent } from './products';

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/home',
        terminal: true
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
```

###modify app.component.html

in ng2-app/src/app/app.component.html
```html
<!--add this-->
<nav>
  <a [routerLink]="['/home']">Home</a>
  <a [routerLink]="['/products']">Products</a>
</nav>
<router-outlet></router-outlet>
```

###modify app.component.ts

in ng2-app/src/app/app.component.ts

```javascript
//...import router provider
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  //...add router provider as directive
  directives: [ROUTER_DIRECTIVES]
})
```

###modify main.ts

in ng2-app/src/app/main.ts

```javascript
//...import router provider
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

//replace this
bootstrap(AppComponent);
//for this
bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
])
.catch(err => console.error(err));
```


run project -> ng serve