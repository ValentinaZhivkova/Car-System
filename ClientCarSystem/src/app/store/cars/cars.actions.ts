import {Injectable} from '@angular/core';
import {CarsService} from '../../cars/cars.service';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../app.state';

export const ADD_CAR = 'cars/ADD';
export const LIST_CARS = 'cars/LIST';
export const CAR_DETAILS = 'car/DETAILS';
export const CAR_LIKE = 'car/LIKE';
export const ADD_CAR_REVIEW = 'add/REVIEW';
export const ALL_REVIEWS = 'all/REVIEWS';
export const USER_CARS = 'user/CARS';
export const USER_CAR_DELETE = 'user/CAR_DELETE';

@Injectable()
export class CarsActions {
  constructor(private carsService: CarsService,
              private ngRedux: NgRedux<IAppState>) {

  }

  addCar(car) {
    this.carsService
      .addCar(car)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: ADD_CAR,
          result
        });
      });
  }

  listCars(page = 1, searchText = null) {
    this.carsService.listCars(page, searchText)
      .subscribe(cars => {
        this.ngRedux.dispatch({
          type: LIST_CARS,
          cars
        });
      });
  }

  carDetails(id) {
    this.carsService.carDetails(id)
      .subscribe(car => {
        this.ngRedux.dispatch({
          type: CAR_DETAILS,
          car
        });
      });
  }
  carLike(id) {
    this.carsService.carLike(id)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: CAR_LIKE,
          result
        });
      });
  }
  carReview(id, review) {
    this.carsService.submitReview(id, review)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: ADD_CAR_REVIEW,
          result
        });
      });
  }

  allReviews(id) {
    this.carsService.allReviews(id)
      .subscribe(reviews => {
        this.ngRedux.dispatch({
          type: ALL_REVIEWS,
          reviews
        });
      });
  }
  userCarDelete(id) {
    this.carsService
      .userCarDelete(id)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: USER_CAR_DELETE,
          result,
          id
        });
      });
  }
  currentUserCars() {
    this.carsService
      .userCarsProfile()
      .subscribe(cars => {
        console.log(cars);
        this.ngRedux.dispatch({
          type: USER_CARS,
          cars
        });
      });
  }
}
