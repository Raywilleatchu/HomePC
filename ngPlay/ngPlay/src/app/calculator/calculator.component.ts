import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CalcButton } from '../calc-button';
import { DOCUMENT } from '@angular/common';
import { CalcBox } from '../calc-box';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  btns:CalcButton[]=
  [
    {btnID:'btn1', btnStr:'1', btnVal:1},
    {btnID:'btn2', btnStr:'2', btnVal:2},
    {btnID:'btn3', btnStr:'3', btnVal:3},
    {btnID:'btn4', btnStr:'4', btnVal:4},
    {btnID:'btn5', btnStr:'5', btnVal:5},
    {btnID:'btn6', btnStr:'6', btnVal:6},
    {btnID:'btn7', btnStr:'7', btnVal:7},
    {btnID:'btn8', btnStr:'8', btnVal:8},
    {btnID:'btn9', btnStr:'9', btnVal:9},
    {btnID:'btnPL',btnStr:'+',btnVal:0},
    {btnID:'btnMN',btnStr:'-',btnVal:0},
    {btnID:'btnML',btnStr:'*',btnVal:0},
    {btnID:'btnDV',btnStr:'/',btnVal:0},
    {btnID:'btnLP',btnStr:'(',btnVal:0},
    {btnID:'btnRP',btnStr:')',btnVal:0},
    {btnID:'btn0',btnStr:'0',btnVal:0},
  ]
  tb:CalcBox = {boxID:'tb1', boxText:''};

  updateText(btn:CalcButton, tb:CalcBox):string
  {
    tb.boxText = tb.boxText + btn.btnStr;
    return tb.boxText;
  }

  DeleteEnd(tb:CalcBox):string
  {
    let endPoint = tb.boxText.length;
    tb.boxText = tb.boxText.substr(0, endPoint - 1)
    return tb.boxText;
  }

  ClearAll(tb:CalcBox):string
  {
    tb.boxText = ''
    return tb.boxText;
  }

  Add(operand1:number, operand2:number):number
  {
    return operand1 + operand2;
  }

  Subtract(operand1:number, operand2:number):number
  {
    return operand1 - operand2;
  }

  Multiply(operand1:number, operand2:number):number
  {
    return operand1 * operand2;
  }

  Divide(operand1:number, operand2:number):number
  {
    return operand1 / operand2;
  }

  ParseNum(text:string):number
  {
    if(!isNaN(parseInt(text)))
    {
      return parseInt(text);
    }
    else
    {
      console.log("Cannot parse ${text}, it has non-number components");
      return 0;
    }
  }

  ParenthsFirst(text:string):string
  {
    //let parenths = '';
    let result = '';
    for(let i = 0; i < text.length; i++)
    {
      if(text[i] == '(')
      {
        for(let j = i; j < text.length; j++)
        {
          if(text[j] == ')')
          {
            //parenths = text.substr(i + 1, j - 1);
            //text = parenths;
            for(let k = i; k < j; k++)
            {
              if(text[k] == '+')
              {
                let op1 = this.ParseNum(text.substr(i + 1, k - 1));
                let op2 = this.ParseNum(text.substr(k + 1, j - 1))
                result = this.Add(op1, op2).toString();
              }
            }
          }
          
        }   
      }
    }
    return result;
  }

  num1:string = '';
  num2:string = '';
  num3:string = '';
  num4:string = '';
  num5:string = '';
  doMath(tb:CalcBox):string
  {
    let text = tb.boxText;
    text = this.ParenthsFirst(text);
    tb.boxText = text;
    return tb.boxText;
  }

  // oldMath(tb:CalcBox):string{
  //   //... Lets just redo all of this when we get back.....

  // /*
  //   Steps to do the math:
  //   1) setup operands(number) to be saved as values 
  //   2) run a loop within the string of numbers 
  //   3) do the math in sets of 2

  //   Implement PEMDAS:
  //   ~Loop through string to check for each procedure accordingly~
  // */

  //   // let operand1 = 0;
  //   // let operand2 = 0;
  //   // let operand3 = 0;
  //   // let operand4 = 0;
    
  //   // for(let i = 0;i<tb.boxText.length;i++)
  //   // { 
  //   //   //problem: figure out why its not computing the math correctly
  //   //   //9(8+2)+1=91
  //   //   if(tb.boxText[i] == '(')
  //   //   {
  //   //     for(let j = i; j <tb.boxText.length;j++)
  //   //     {
  //   //       if(tb.boxText[j] == ')' && i < j)
  //   //       {
  //   //         //set parenthspot and use it in next check 
  //   //         if(operand1 == 0)
  //   //         {
  //   //           for(let k = i; k<tb.boxText.length; k++)
  //   //           {
  //   //             if(tb.boxText[k] == '+' || tb.boxText[k] == '-' || tb.boxText[k] == '*' || tb.boxText[k] == '/')
  //   //             {
  //   //               operand1 = parseInt(tb.boxText.substr(i + 1, k - 1));
  //   //               operand2 = parseInt(tb.boxText.substr(k + 1, j - 1));
  //   //             }
  //   //             if(tb.boxText[k] == '+')
  //   //             {
  //   //               operand1 = operand1 + operand2;
  //   //             }
  //   //             else if(tb.boxText[k] == '-')
  //   //             {
  //   //               operand1 = operand1 - operand2;
  //   //             }
  //   //             else if(tb.boxText[k] == '*')
  //   //             {
  //   //               operand1 = operand1 * operand2;
  //   //             }
  //   //             else if(tb.boxText[k] == '/')
  //   //             {
  //   //               operand1 = operand1 / operand2;
  //   //             }
  //   //           }
  //   //         }
            
  //   //         if(!isNaN(parseInt(tb.boxText[i-1])))
  //   //         {
  //   //           operand4 = parseInt(tb.boxText.substr(0, i-1));
  //   //           operand1 = operand4 * operand1;
  //   //         }
  //   //         else
  //   //         {
  //   //           for(let t = 0; t < i; t++)
  //   //           {
  //   //             if(tb.boxText[i - 1] == '+')
  //   //             { 
  //   //               if(!isNaN(parseInt(tb.boxText[t])) && !isNaN(parseInt(tb.boxText.substr(t,i-2))))
  //   //               {
  //   //                 operand4 = parseInt(tb.boxText.substr(t,i-1));
  //   //                 this.num5 = tb.boxText.substr(t,i-1)
  //   //                 this.num1 = operand1.toString();
  //   //                 operand1 = operand4 + operand1;
  //   //                 break;
  //   //               }
  //   //             }
  //   //             else if(tb.boxText[i - 1] == '-')
  //   //             {
  //   //               if(!isNaN(parseInt(tb.boxText[t])) && !isNaN(parseInt(tb.boxText.substr(t,i-2))))
  //   //               {
  //   //                 operand4 = parseInt(tb.boxText.substr(t,i-2));
  //   //                 operand1 = operand4 - operand1;
  //   //               }
  //   //             }
  //   //             else if(tb.boxText[i - 1] == '*')
  //   //             {
  //   //               if(!isNaN(parseInt(tb.boxText[t])) && !isNaN(parseInt(tb.boxText.substr(t,i-2))))
  //   //               {
  //   //                 operand4 = parseInt(tb.boxText.substr(t,i-2));
  //   //                 operand1 = operand4 * operand1;
  //   //               }
  //   //             }
  //   //             else if(tb.boxText[i - 1] == '/')
  //   //             {
  //   //               if(!isNaN(parseInt(tb.boxText[t])) && !isNaN(parseInt(tb.boxText.substr(t,i-2))))
  //   //               {
  //   //                 operand4 = parseInt(tb.boxText.substr(t,i-2));
  //   //                 operand1 = operand4 / operand1;
  //   //               }
  //   //             }

  //   //           }
  //   //         }
            

  //   //         if(!isNaN(parseInt(tb.boxText[i+1])))
  //   //         {
  //   //           operand4 = parseInt(tb.boxText[i+1]);
  //   //           operand1 = operand4 * operand1;
  //   //         }
  //   //         else
  //   //         {
  //   //           for(let t = 0; t < i; t++)
  //   //           {
  //   //             if(tb.boxText[i - 1] == '+')
  //   //             { 
  //   //               if(!isNaN(parseInt(tb.boxText[t])) && !isNaN(parseInt(tb.boxText.substr(t,i-2))))
  //   //               {
  //   //                 operand4 = parseInt(tb.boxText.substr(t,i-1));
  //   //                 this.num5 = tb.boxText.substr(t,i-1)
  //   //                 this.num1 = operand1.toString();
  //   //                 operand1 = operand4 + operand1;
  //   //                 break;
  //   //               }
  //   //             }
  //   //             else if(tb.boxText[i - 1] == '-')
  //   //             {
  //   //               if(!isNaN(parseInt(tb.boxText[t])) && !isNaN(parseInt(tb.boxText.substr(t,i-2))))
  //   //               {
  //   //                 operand4 = parseInt(tb.boxText.substr(t,i-2));
  //   //                 operand1 = operand4 - operand1;
  //   //               }
  //   //             }
  //   //             else if(tb.boxText[i - 1] == '*')
  //   //             {
  //   //               if(!isNaN(parseInt(tb.boxText[t])) && !isNaN(parseInt(tb.boxText.substr(t,i-2))))
  //   //               {
  //   //                 operand4 = parseInt(tb.boxText.substr(t,i-2));
  //   //                 operand1 = operand4 * operand1;
  //   //               }
  //   //             }
  //   //             else if(tb.boxText[i - 1] == '/')
  //   //             {
  //   //               if(!isNaN(parseInt(tb.boxText[t])) && !isNaN(parseInt(tb.boxText.substr(t,i-2))))
  //   //               {
  //   //                 operand4 = parseInt(tb.boxText.substr(t,i-2));
  //   //                 operand1 = operand4 / operand1;
  //   //               }
  //   //             }

  //   //           }
  //   //         }

  //   //         //this.num1 = operand1.toString();
  //   //         this.num2 = operand2.toString();
  //   //         i = j;
  //   //       }
  //   //     }
  //   //   }

  // //     if(tb.boxText[i] == ')' && tb.boxText[i+1] != null)
  // //     {
  // //       if(!isNaN(parseInt(tb.boxText[i+1])))
  // //       {
  // //         operand2 = parseInt(tb.boxText[i + 1]);
  // //       }
  // //       operand1 = operand1 * operand2;
  // //     }

  // //     if(tb.boxText[i] == '+' && tb.boxText[i+1] != '(' && tb.boxText[i-1] != ')')
  // //     {
  // //       if(operand1 == 0)
  // //       {
  // //         operand1 = parseInt(tb.boxText[i - 1]);
  // //       }
  // //       operand2 = parseInt(tb.boxText[i + 1]);
  // //       operand1 = (operand1 + operand2);
  // //     }
  // //     else if(tb.boxText[i] == '-' && tb.boxText[i+1] != '(' && tb.boxText[i-1] != ')')
  // //     {
  // //       if(operand1 == 0)
  // //       {
  // //         operand1 = parseInt(tb.boxText[i - 1]);
  // //       }
  // //       operand2 = parseInt(tb.boxText[i + 1]);
  // //       operand1 = (operand1 - operand2);
  // //     }
  // //     else if(tb.boxText[i] == '*' && tb.boxText[i+1] != '(' && tb.boxText[i-1] != ')')
  // //     {
  // //       if(operand1 == 0)
  // //       {
  // //         operand1 = parseInt(tb.boxText[i - 1]);
  // //       }
  // //       operand2 = parseInt(tb.boxText[i + 1]);
  // //       operand1 = (operand1 * operand2);
  // //     }
  // //     else if(tb.boxText[i] == '/' && tb.boxText[i+1] != '(' && tb.boxText[i-1] != ')')
  // //     {
  // //       if(operand1 == 0)
  // //       {
  // //         operand1 = parseInt(tb.boxText[i - 1]);
  // //       }
  // //       operand2 = parseInt(tb.boxText[i + 1]);
  // //       operand1 = (operand1 / operand2);
  // //     }
  // //   }
  // //   tb.boxText = operand1.toString();
  //   return tb.boxText;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
