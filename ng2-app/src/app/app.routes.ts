import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from './home';
import { ProductsComponent } from './products';
import { AuthComponent } from './auth';
import {  ProductsRoutes } from './products/products.routes';

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
    ...ProductsRoutes,
    {
        path: 'auth',
        component: AuthComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];