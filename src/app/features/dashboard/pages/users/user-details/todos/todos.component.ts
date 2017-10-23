import { paginationConfig } from '../../../../../../utils/constants/pagination-config';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xzy-dashboard-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Input('todos') public todos;
  public itemsPerPage: number = paginationConfig.itemsPerPage;
  public currentPage: number = paginationConfig.currentPage;

  constructor() { }

  ngOnInit() {
  }

}
