import { paginationConfig } from '../../../../../../utils/constants/pagination-config';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xzy-dashboard-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  @Input('photos') public photos;
  public itemsPerPage: number = paginationConfig.itemsPerPage;
  public currentPage: number = paginationConfig.currentPage;

  constructor() { }

  ngOnInit() {
  }

}
