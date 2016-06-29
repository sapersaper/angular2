import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ProductsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
