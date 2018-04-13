import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';

import {UsersService} from './users.service';
import { UsersActions } from '../store/users/users.actions';

import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import {UserCarsProfileComponent} from './user-cars-profile.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, UserCarsProfileComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [UsersService, UsersActions],
  exports: []
})

export class UsersModule {
}
