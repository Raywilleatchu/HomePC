import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(private http:HttpClient) { }
  getPosts(cb:Function)
  {
    this.http.get<any>('https://www.reddit.com/r/aww/.json').subscribe(
      (result:Post) =>{
        result.data.children.forEach(item => {
          item.data.permalink = `https://www.reddit.com${item.data.permalink}`
        });
        cb(result);
        

        console.log(result);
      }
    );
  }
}
