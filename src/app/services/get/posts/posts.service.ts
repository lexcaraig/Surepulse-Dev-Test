import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { base, endpoints } from '../../../utils/constants/endpoints';
import { Post } from "./post.model";

@Injectable()
export class PostsService {

  constructor(
    private http: Http
  ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get(`${base}${endpoints.posts}`)
      .map( data => data.json() );
  }

}
