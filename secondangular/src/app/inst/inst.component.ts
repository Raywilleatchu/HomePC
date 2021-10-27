import { Component, Input, OnInit } from '@angular/core';
import { Instrument } from '../instrument';

@Component({
  selector: 'app-inst',
  templateUrl: './inst.component.html',
  styleUrls: ['./inst.component.css']
})
export class InstComponent implements OnInit {

@Input() theinst: Instrument = 
{
  kind:"Piano",
  color:"Black"
}



  constructor() { }

  ngOnInit(): void {
  }

  

}
