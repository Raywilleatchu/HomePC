import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  allPosts:Post[] =
  [
    {title:"Post 1", thought: "Dogs are cool.."},
    {title:"Post 2", thought: "Dogs are not cool.."},
    {title:"Post 3", thought: "Cats are cool.."},
    {title:"Post 4", thought: "Cats are not cool.."}
  ]

  newtitle:string = '';
  newthought:string = '';


  constructor() { }

  ngOnInit(): void {
  }

  addPost()
  {
    this.allPosts.push({title:this.newtitle, thought:this.newthought});
  }

  oofDeletedMyMan(postI:number)
  {
    delete this.allPosts[postI];
  }

}
