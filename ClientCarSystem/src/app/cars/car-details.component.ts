import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CarsActions} from '../store/cars/cars.actions';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store';
import {CarReviewModel} from './car-review.model';

@Component({
  selector: 'app-car-details',
  templateUrl: 'car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car: object;
  private carId: number;
  review: CarReviewModel = new CarReviewModel(5);
  carReviews: Array<object> = [];

  constructor(private route: ActivatedRoute,
              private carActions: CarsActions,
              private ngRedux: NgRedux<IAppState>) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        const id = params['id'];
        this.carActions.carDetails(id);
        this.carActions.allReviews(id);
        this.ngRedux.select(state => state.cars)
          .subscribe(cars => {
            this.car = cars.carDetails;
            this.carReviews = cars.carReviews;
          });
      });

  }

  likeCar() {
    this.carActions.carLike(this.car['id']);
  }

  submitReview() {
    this.carActions.carReview(this.car['id'], this.review);
  }
}
