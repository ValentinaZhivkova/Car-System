import {Injectable} from '@angular/core';

import {HttpService} from '../core/http.service';

@Injectable()
export class CarsService {
  constructor(private httpService: HttpService) {

  }

  addCar(car) {
    return this.httpService.post('cars/create', car, true);
  }

  listCars(page = 1, searchText = null) {
    let url = `cars/all?page=${page}`;
    if (searchText) {
      url += `&search=${searchText}`;
    }
    return this.httpService.get(url);
  }

  carDetails(id) {
    return this.httpService.get(`cars/details/${id}`, true);
  }

  carLike(id) {
    return this.httpService.post(`cars/details/${id}/like`, {}, true);
  }

  submitReview(id, review) {
    return this.httpService.post(`cars/details/${id}/reviews/create`, review, true);

  }

  allReviews(id) {
    return this.httpService.get(`cars/details/${id}/reviews`, true);
  }
  userCarDelete(id) {
    return this.httpService.post(`cars/delete/${id}`, {}, true);
  }
  userCarsProfile() {
    return this.httpService.get(`cars/mine`, true);
  }
}
