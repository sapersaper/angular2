import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from './home';
import { ProductsComponent } from './products';
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
    ...ProductsRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];