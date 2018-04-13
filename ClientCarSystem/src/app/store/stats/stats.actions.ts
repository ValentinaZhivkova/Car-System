import {Injectable} from '@angular/core';

import {StatsService} from '../../stats/stats.service';
import {NgRedux} from 'ng2-redux';
import {IStatsState} from './stats.state';

export const STATS_REQUESTED = 'stats/REQUESTED';

@Injectable()
export class StatsActions {
  constructor(private statsService: StatsService, private ngRedux: NgRedux<IStatsState>) {

  }

  get() {
    this.statsService.get()
      .subscribe(stats => {
        this.ngRedux.dispatch({
          type: STATS_REQUESTED,
          stats
        });
      });
  }
}
