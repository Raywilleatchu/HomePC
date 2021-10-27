import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'awwreddit';

  posts?:Post;

  constructor(private http:HttpClient){ }

  
  getPosts()
  {
    this.http.get<any>('https://www.reddit.com/r/aww/.json').subscribe(
      (result:Post) =>{
        this.posts = result;
        
        this.posts.data.children.forEach(item => {
          item.data.permalink = `https://www.reddit.com${item.data.permalink}`
        });

        console.log(result);
      }
    );
  }
  ngOnInit(): void {
  }
}

