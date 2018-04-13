import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';

import {AuthService} from './auth.service';

import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:5000/';
const getMethod = 'get';
const postMethod = 'post';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient,
              private authService: AuthService) {

  }

  get(url, authenticated = false) {
    const header = this.getHeader(getMethod, authenticated);

    return this.http.get(`${baseUrl}${url}`, {headers: header})
      .map(res => res);
  }

  post(url, data, authenticated = false) {
    const headers = this.getHeader(postMethod, authenticated);

    return this.http
      .post(`${baseUrl}${url}`, JSON.stringify(data), {headers: headers})
      .map(res => res);

  }

  private getHeader(method, authenticated): HttpHeaders {

    if (method !== getMethod && !authenticated) {
      return new HttpHeaders({'Content-type': 'application/json'});
    }
    if (authenticated) {
      return new HttpHeaders({
        'Authorization': `bearer ${this.authService.getToken()}`,
        'Content-type': 'application/json'
      });
    }

  }
}
