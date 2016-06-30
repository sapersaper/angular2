import { RouterConfig } from '@angular/router';
import { ProductsComponent } from './';
import { ProductDetailComponent } from './product-detail';
import { ProductListComponent } from './product-list'
import { ActivateGuard } from '../guards/activate.guard';

export const ProductsRoutes: RouterConfig = [
    {
        path: '',
        redirectTo: '/products',
        terminal: true
    },
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [ActivateGuard],
        children: [
            { 
                path: '', 
                component: ProductListComponent
            },
            { 
                path: ':id', 
                component: ProductDetailComponent 
            }
        ]
    }
];