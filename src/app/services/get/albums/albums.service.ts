import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { base, endpoints } from '../../../utils/constants/endpoints';
import { Album } from "./album.model";

@Injectable()
export class AlbumsService {

  constructor(
    private http: Http
  ) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get(`${base}${endpoints.albums}`)
      .map( data => data.json() );
  }

}
