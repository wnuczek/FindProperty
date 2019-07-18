import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { post } from '../posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-page-post',
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.sass']
})
export class PagePostComponent implements OnInit {

  post=post;

  constructor(private PostsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.getPostDetails();
  }

  getPostDetails(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
    this.PostsService.getPostDetails(id)
      .subscribe(post => {this.post = post['data'], console.log(post['data'])});
  }

}
