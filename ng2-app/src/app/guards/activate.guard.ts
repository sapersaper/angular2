import { CanActivate } from '@angular/router';

export class ActivateGuard implements CanActivate {
  canActivate() {
    console.log('ActivateGuard#canActivate called');
    return true;
  }
}