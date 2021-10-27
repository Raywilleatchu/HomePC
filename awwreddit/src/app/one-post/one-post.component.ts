import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {

  @Input() posting?:Post;
  

  constructor() { }

  ngOnInit(): void {
  }

}
