/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AuthComponent } from './auth.component';
//define params
var authService, router;
describe('Component: Auth', () => {
  it('should create an instance', () => {
    let component = new AuthComponent(authService, router);
    expect(component).toBeTruthy();
  });
});
