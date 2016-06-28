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