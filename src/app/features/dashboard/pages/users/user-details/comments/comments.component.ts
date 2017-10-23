import { paginationConfig } from '../../../../../../utils/constants/pagination-config';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xzy-dashboard-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input('comments') public comments;
  public itemsPerPage: number = paginationConfig.itemsPerPage;
  public currentPage: number = paginationConfig.currentPage;

  constructor() { }

  ngOnInit() {
  }

}
