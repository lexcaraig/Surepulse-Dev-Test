import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { paginationConfig } from '../../../../utils/constants/pagination-config';

import { UsersService } from "../../../../services/get/users/users.service";
import { User } from "../../../../services/get/users/user.model";

@Component({
  selector: 'xzy-dashboard-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: Observable<User[]>;
  public itemsPerPage: number = paginationConfig.itemsPerPage;
  public currentPage: number = paginationConfig.currentPage;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

}
