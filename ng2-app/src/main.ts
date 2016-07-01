import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { AuthGuard } from './app/guards/auth.guard';
import { AuthService } from './app/guards/auth.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  AuthGuard,
  AuthService
])
.catch(err => console.error(err));

