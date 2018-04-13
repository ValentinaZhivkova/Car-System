import { NgModule } from '@angular/core';
import {StatsComponent} from './stats.component';
import { StatsService } from './stats.service';
import {CommonModule} from '@angular/common';
import {StatsActions} from '../store/stats/stats.actions';

@NgModule({
  declarations: [StatsComponent],
  imports: [CommonModule],
  exports: [],
  providers: [StatsService, StatsActions]
})
export class StatsModule {

}
