import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { UsersService } from "../../../../../services/get/users/users.service";
import { User } from "../../../../../services/get/users/user.model";
import { Photo } from "../../../../../services/get/photos/photo.model";
import { PhotosService } from "../../../../../services/get/photos/photos.service";
import { PostsService } from "../../../../../services/get/posts/posts.service";
import { Post } from "../../../../../services/get/posts/post.model";
import { AlbumsService } from "../../../../../services/get/albums/albums.service";
import { Album } from "../../../../../services/get/albums/album.model";
import { TodosService } from "../../../../../services/get/todos/todos.service";
import { Todo } from "../../../../../services/get/todos/todo.model";
import { CommentsService } from "../../../../../services/get/comments/comments.service";
import { Comment } from '../../../../../services/get/comments/comment.model';

@Component({
  selector: 'xzy-dashboard-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public user: Observable<User>;
  public photos: Photo[];
  public posts: Post[];
  public comments: Comment[];
  public albums: Album[];
  public todos: Todo[];
  private id: number;

  constructor(
    private usersService: UsersService,
    private photosService: PhotosService,
    private postsService: PostsService,
    private commentsService: CommentsService,
    private albumsService: AlbumsService,
    private todosService: TodosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      this.user = this.usersService.getUserDetails(this.id);
      this.photosService.getPhotos()
        .subscribe(data => {
          this.photos = data.filter( photo => photo.albumId === this.id );
        });
      this.postsService.getPosts()
        .subscribe(data => {
          this.posts = data.filter( post => post.userId === this.id );
        });
        this.commentsService.getComments()
        .subscribe(data => {
          this.comments = data.filter( post => post.postId === this.id );
        });
      this.albumsService.getAlbums()
        .subscribe(data => {
          this.albums = data.filter( album => album.userId === this.id );
        });
      this.todosService.getTodos()
        .subscribe(data => {
          this.todos = data.filter( todo => todo.userId === this.id );
        });
    });
  }

}
