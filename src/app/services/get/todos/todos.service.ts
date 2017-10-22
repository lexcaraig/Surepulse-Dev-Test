import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { base, endpoints } from '../../../utils/constants/endpoints';
import { Todo } from "./todo.model";

@Injectable()
export class TodosService {

  constructor(
    private http: Http
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get(`${base}${endpoints.todos}`)
      .map( data => data.json() );
  }

}
