import { paginationConfig } from '../../../../../../utils/constants/pagination-config';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xzy-dashboard-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  @Input('albums') public albums;
  public itemsPerPage: number = paginationConfig.itemsPerPage;
  public currentPage: number = paginationConfig.currentPage;

  constructor() { }

  ngOnInit() {
  }

}
