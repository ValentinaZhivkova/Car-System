import {Injectable} from '@angular/core';
import {HttpService} from '../core/http.service';

@Injectable()
export class StatsService {
  constructor(private http: HttpService) {

  }

  get() {
    return this.http.get('stats');
  }
}
