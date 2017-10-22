import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';

import { UsersService } from "../../services/get/users/users.service";
import { AlbumsService } from "../../services/get/albums/albums.service";

import { UsersComponent } from "./pages/users/users.component";
import { UserDetailsComponent } from "./pages/users/user-details/user-details.component";
import { PhotosService } from "../../services/get/photos/photos.service";
import { PostsService } from "../../services/get/posts/posts.service";
import { TodosService } from "../../services/get/todos/todos.service";
import { CommentsService } from "../../services/get/comments/comments.service";

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full'},
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: UserDetailsComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpModule,
    NgxPaginationModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    UsersComponent,
    UserDetailsComponent
],
  providers: [
    UsersService,
    PhotosService,
    PostsService,
    CommentsService,
    AlbumsService,
    TodosService
  ]
})
export class DashboardModule { }
