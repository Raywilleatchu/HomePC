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
    {btnID:'btnPL', btnStr:'+',btnVal:0},
    {btnID:'btnMN', btnStr:'-',btnVal:0},
    {btnID:'btnML', btnStr:'*',btnVal:0},
    {btnID:'btnDV', btnStr:'/',btnVal:0},
    {btnID:'btnLP', btnStr:'(',btnVal:0},
    {btnID:'btnRP', btnStr:')',btnVal:0},
  ]
  tb:CalcBox = {boxID:'tb1', boxText:''};

  updateText(btn:CalcButton, tb:CalcBox):string{
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

  num1:string = '';
  num2:string = '';
  num3:string = '';
  doMath(tb:CalcBox):string
  {
  /*
    Steps to do the math:
    1) setup operands(number) to be saved as values 
    2) run a loop within the string of numbers 
    3) do the math in sets of 2

    Implement PEMDAS:
    ~Loop through string to check for each procedure accordingly~
  */

    let operand1 = parseInt(tb.boxText);
    let operand2:Number;
    let operand3:Number;
    let operand4:Number;

    for(let i = 0;i<tb.boxText.length;i++)
    {
      //problem: figure out why its not computing the math correctly
      //9(8+2)=90
      //We get 92 instead...
      if(tb.boxText[i] == '(')
      {
        if(operand1 == 0)
        {
          operand1 = parseInt(tb.boxText[i - 1]);
        }
        operand2 = parseInt(tb.boxText[i + 1]);
        operand3 = parseInt(tb.boxText[i + 3]);
        this.num1 = operand1.toString();
        this.num2 = operand2.toString();
        this.num3 = operand3.toString();
        operand4 = (+operand2) + (+operand3);
        operand1 = operand1 * +operand4;
      }
    }

    for(let i = 0;i<tb.boxText.length;i++)
    {
      if(tb.boxText[i] == '+')
      {
        if(operand1 == 0)
        {
          operand1 = parseInt(tb.boxText[i - 1]);
        }
        operand2 = parseInt(tb.boxText[i + 1]);
        operand1 = (+operand1 + +operand2);
      }
      else if(tb.boxText[i] == '-')
      {
        if(operand1 == 0)
        {
          operand1 = parseInt(tb.boxText[i - 1]);
        }
        operand2 = parseInt(tb.boxText[i + 1]);
        operand1 = (+operand1 - +operand2);
      }
      else if(tb.boxText[i] == '*')
      {
        if(operand1 == 0)
        {
          operand1 = parseInt(tb.boxText[i - 1]);
        }
        operand2 = parseInt(tb.boxText[i + 1]);
        operand1 = (+operand1 * +operand2);
      }
      else if(tb.boxText[i] == '/')
      {
        if(operand1 == 0)
        {
          operand1 = parseInt(tb.boxText[i - 1]);
        }
        operand2 = parseInt(tb.boxText[i + 1]);
        operand1 = (+operand1 / +operand2);
      }
    }
    tb.boxText = operand1.toString();
    return tb.boxText;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
