/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
//define params
var productService, router;

describe('Component: ProductList', () => {
  it('should create an instance', () => {
    let component = new ProductListComponent(productService, router);
    expect(component).toBeTruthy();
  });
});
