import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';

@Component({
  moduleId: module.id,
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
  constructor(private userService: ProductService) { }
  products: Product[];
  ngOnInit() {
    this.userService.getProducts().then(products => this.products = products);
  }
}
