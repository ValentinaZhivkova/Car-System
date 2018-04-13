import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AddCarComponent} from './add-car.component';
import { CommonModule } from '@angular/common';
import {CarsActions} from '../store/cars/cars.actions';
import {CarsService} from './cars.service';
import {ListCarsComponent} from './list-cars.component';
import {RouterModule} from '@angular/router';
import {CarDetailsComponent} from './car-details.component';

@NgModule({
  declarations: [AddCarComponent, ListCarsComponent, CarDetailsComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [CarsActions, CarsService],
  exports: []
})

export class CarsModule {

}
