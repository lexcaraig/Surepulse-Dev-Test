import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { base, endpoints } from '../../../utils/constants/endpoints';
import { Comment } from './comment.model';

@Injectable()
export class CommentsService {

  constructor(
    private http: Http
  ) { }

  getComments(): Observable<Comment[]> {
    return this.http.get(`${base}${endpoints.comments}`)
      .map( data => data.json() );
  }

}
