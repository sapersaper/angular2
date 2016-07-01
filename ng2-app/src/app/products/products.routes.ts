import { RouterConfig } from '@angular/router';
import { ProductsComponent } from './';
import { ProductDetailComponent } from './product-detail';
import { ProductListComponent } from './product-list'
import { AuthGuard } from '../guards/auth.guard';

export const ProductsRoutes: RouterConfig = [
    {
        path: '',
        redirectTo: '/products',
        terminal: true
    },
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [AuthGuard],
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