import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  currentdate:Date= new Date();
  dateNum!:Number;
  timeNum!:Number;
  dateButton!:boolean;
  timeButton!:boolean;
  stringNum!:Number;
  stringButton!:boolean;
  testString:string='zAch POrRas';

  
  genDate(){
       this.dateButton=!this.dateButton
     
  }

  genTime(){

    this.timeButton=!this.timeButton;

  }

  genString(){

    this.stringButton=!this.stringButton

  }
  constructor() { }

  ngOnInit(): void {
  }

}
