import {Injectable} from '@angular/core';

@Injectable()
export class Constants {
  BASE_API_URL = 'http://localhost:8080/api';
  USER_API_URL = this.BASE_API_URL + '/user';
}
