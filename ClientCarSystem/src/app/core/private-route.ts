import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';

import {AuthService} from './auth.service';

@Injectable()
export class PrivateRoute implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(): boolean {
    if (this.authService.isUserAuthenticated()) {
      return true;
    }else {
      this.router.navigateByUrl('users/login');
      return false;
    }
  }
}
