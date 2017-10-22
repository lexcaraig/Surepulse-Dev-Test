import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { base, endpoints } from '../../../utils/constants/endpoints';
import { Photo } from "./photo.model";

@Injectable()
export class PhotosService {

  constructor(
    private http: Http
  ) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get(`${base}${endpoints.photos}`)
      .map( data => data.json() );
  }

}
