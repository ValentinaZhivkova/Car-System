import { IUsersState } from './users/users.state';
import {ICoreState } from './core/core.state';
import { IStatsState } from './stats/stats.state';
import {ICarsState} from './cars/cars.state';

export interface IAppState {
  users: IUsersState;
  core: ICoreState;
  stats: IStatsState;
  cars: ICarsState;
}


