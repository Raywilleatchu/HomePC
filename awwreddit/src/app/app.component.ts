import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ParentPost, Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'awwreddit';

  posts?:ParentPost;
  constructor(private http:HttpClient){ }


  getPosts()
  {
    this.http.get<any>('https://www.reddit.com/r/aww/.json').subscribe(
      (result) =>{
        this.posts = result;
      }
    );

  }
}

