import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {

  todos:Todo[] = 
  [
    {itemName:"Item1", itemID:1, itemCompleted: true},
    {itemName:"Item2", itemID:2, itemCompleted: false},
    {itemName:"Item3", itemID:3, itemCompleted: false}
  ]

  newItemName:string = '';
  newItemID:number = 0;
  newItemComp:boolean = false;


  
  addItem()
  {
    this.todos.forEach(todo => {
      if(this.newItemID < todo.itemID)
      {
          this.newItemID = todo.itemID + 1
      }
    });

     this.todos.push( {itemName: this.newItemName, itemID:this.newItemID, itemCompleted: this.newItemComp} );
     this.newItemID = 0;
     this.newItemName = '';  
  }

  checkCompletion(comp:boolean):string
  {
    let result = '';
    if(comp == false)
    {
      result = "Not Complete";
    }
    else if(comp == true)
    {
      result = "Completed";
    }
    return result;
  }

  completeItem(item:Todo):void
  {
    if(item.itemCompleted == false)
    {
      item.itemCompleted = true;
    }
    else if (item.itemCompleted == true)
    {
      item.itemCompleted = false;
    }
  }

  constructor() { }
  ngOnInit(): void {
  }

}
