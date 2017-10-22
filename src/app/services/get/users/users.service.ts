import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { base, endpoints } from '../../../utils/constants/endpoints';
import { User } from "./user.model";

@Injectable()
export class UsersService {

  constructor(
    private http: Http
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get(`${base}${endpoints.users}`)
      .map( data => data.json() )
  }

  getUserDetails(id: number): Observable<User> {
    return this.http.get(`${base}${endpoints.users}/${id}`)
      .map( data => data.json() );
  }

}
