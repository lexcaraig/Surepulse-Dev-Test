import { paginationConfig } from '../../../../../../utils/constants/pagination-config';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xzy-dashboard-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input('posts') public posts;
  public itemsPerPage: number = paginationConfig.itemsPerPage;
  public currentPage: number = paginationConfig.currentPage;

  constructor() { }

  ngOnInit() {
  }

}
