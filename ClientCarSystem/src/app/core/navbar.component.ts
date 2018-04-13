import {Component, OnInit} from '@angular/core';

import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store';
import {Router} from '@angular/router';
import {UsersActions} from '../store/users/users.actions';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authenticated: boolean;
  username: string = null;


  constructor(private ngRedux: NgRedux<IAppState>,
              private usersActions: UsersActions,
              private authService: AuthService,
              private router: Router) {
    this.authenticated = false;
  }

  ngOnInit() {
    this.ngRedux
      .select(state => state.users)
      .subscribe(users => {
        this.authenticated = users.userAuthenticated;
        this.username = users.username;
      });
  }

  logout() {
    this.usersActions.logout();
    this.authService.deauthenticateUser();
    this.authService.removeUser();

    this.router.navigateByUrl('');
  }
}
