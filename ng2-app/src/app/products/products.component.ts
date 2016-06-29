import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Product, ProductService }   from './product.service';

@Component({
  moduleId: module.id,
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
