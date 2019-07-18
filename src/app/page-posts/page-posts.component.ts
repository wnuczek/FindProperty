import { Component, OnInit } from '@angular/core';
import { post } from '../posts';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-page-posts',
  templateUrl: './page-posts.component.html',
  styleUrls: ['./page-posts.component.sass']
})
export class PagePostsComponent implements OnInit {

  posts: post[]=[];
  p: number = 1;

  constructor(private PostsService: PostsService) { }

  ngOnInit() {
  	this.getPosts();
  }

  getPosts(): void {
    this.PostsService.getPosts()
      .subscribe(posts => {this.posts = posts['data'], console.log(posts['data'])});
  }

}
