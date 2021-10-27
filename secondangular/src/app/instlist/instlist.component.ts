import { Component, OnInit } from '@angular/core';
import { Instrument } from '../instrument';

@Component({
  selector: 'app-instlist',
  templateUrl: './instlist.component.html',
  styleUrls: ['./instlist.component.css']
})
export class InstlistComponent implements OnInit {

myinsts: Instrument[] = [
  { kind:"Piano", color:"Black" },
  { kind:"Guitar", color:"Orange" },
  { kind:"Saxaphone", color:"Green" }
]
thekind:string = '';
thecolor:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  add()
  {
    this.myinsts.push({kind: this.thekind, color:this.thecolor});
  }
}
