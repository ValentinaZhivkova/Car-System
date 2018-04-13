import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {NgReduxModule, NgRedux} from 'ng2-redux';
import {store, IAppState} from './store';

import {UsersModule} from './users/users.module';
import {CoreModule} from './core/core.module';
import {CarsModule } from './cars/cars.module';

import {CarRoutesModule} from './routes.module';


import {AppComponent} from './app.component';
import {Router} from '@angular/router';
import {AuthService} from './core/auth.service';


import { config } from './core/config';
import {StatsModule} from './stats/stats.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    CarRoutesModule,
    NgReduxModule,
    HttpClientModule,
    CoreModule,
    CarsModule,
    StatsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
              private authService: AuthService,
              private router: Router) {
    this.ngRedux.provideStore(store);
    config(this.ngRedux, this.router, this.authService);

  }
}
