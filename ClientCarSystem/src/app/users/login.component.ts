import {Component} from '@angular/core';
import {LoginUserModel} from './login-user.model';
import {UsersActions} from '../store/users/users.actions';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store';

import {Router} from '@angular/router';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user: LoginUserModel = new LoginUserModel();

  constructor(private usersActions: UsersActions,
              private ngRedux: NgRedux<IAppState>,
              private authService: AuthService,
              private router: Router) {

  }

  login() {
    console.log(this.user);
    this.usersActions.login(this.user);
    this.ngRedux
      .select(state => state.users)
      .subscribe(users => {

        this.authService.authenticateUser(users.token);
        this.authService.saveUser(users.username);
        console.log(users);
        this.router.navigateByUrl('');


      });

  }
}
