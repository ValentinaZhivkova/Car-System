import {Component, OnInit} from '@angular/core';
import {UsersActions} from '../store/users/users.actions';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store';
import {CarsActions} from '../store/cars/cars.actions';

@Component({
  selector: 'app-user-cars-profile',
  templateUrl: './user-cars-profile.component.html'
})
export class UserCarsProfileComponent implements OnInit {
  currentUserCars: Array<object> = [];

  constructor(private usersActions: UsersActions,
              private carsActions: CarsActions,
              private ngRedux: NgRedux<IAppState>) {

  }

  ngOnInit() {
    this.carsActions.currentUserCars();
    this.ngRedux
      .select(state => state.cars.currentUserCars)
      .subscribe(currentUserCars => {
        this.currentUserCars = currentUserCars;
      });
  }

  delete(id) {
    this.carsActions.userCarDelete(id);
  }

}
