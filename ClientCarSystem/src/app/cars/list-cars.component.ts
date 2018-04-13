import {Component, OnInit} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store';
import {CarsActions} from '../store/cars/cars.actions';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html'
})
export class ListCarsComponent implements OnInit {
  cars: Array<object> = [];
  searchText: string;
  private page = 1;

  constructor(private ngRedux: NgRedux<IAppState>,
              private carsActions: CarsActions,
              private router: Router,
              private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.page = +params['page'] || 1;
        this.searchText = params['search'];
        console.log(params);
        this.carsActions.listCars(this.page, this.searchText);
        this.ngRedux
          .select(state => state.cars.listCars)
          .subscribe(cars => {
            this.cars = cars;
          });
      });

  }

  prevPage() {
    if (this.page === 1) {
      return;
    }
    const url = this.getUrl(this.page - 1);
    this.router.navigateByUrl(url);
  }

  nextPage() {
    if (this.cars.length === 0) {
      return;
    }
    const url = this.getUrl(this.page + 1);
    this.router.navigateByUrl(url);
  }

  search() {
    const firstSearchedPage = 1;
    this.router.navigateByUrl(`cars/all?page=${firstSearchedPage}&search=${this.searchText}`);
  }

  private getUrl(page) {
    let url = `cars/all?page=${page}`;
    if (this.searchText) {
      return url += `&search=${this.searchText}`;
    } else {
      return url;
    }
  }
}
