import { Component } from '@angular/core';
import { Post } from './post';
import { PostApiService } from './post-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'awwreddit';

  constructor(private postapi:PostApiService){ }
  
  ngOnInit(): void {
  }

  thePosts?:Post;

  getAllPosts()
  {
    this.postapi.getPosts(
      (result:Post) => this.thePosts = result
    );
  }

}

