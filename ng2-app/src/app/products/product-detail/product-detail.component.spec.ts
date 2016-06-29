/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
//define params
var router, activatedRoute, productService;
describe('Component: ProductDetail', () => {
  it('should create an instance', () => {
    let component = new ProductDetailComponent(router, activatedRoute, productService);
    expect(component).toBeTruthy();
  });
});
