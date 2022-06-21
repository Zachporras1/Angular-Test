import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {


  title:string[]=[];
  newtitle='';
  error:string=''


  onInput(titles:string){
    this.newtitle=titles;
  }

  addTitle(){
    if(!this.newtitle){
      this.error='Error:Cannot be Blank'
    } 
    else{
    this.title.push(this.newtitle)
    this.newtitle=''
      this.error=''
  }


  }

  removeTitle(){
    this.title=[];
    this.newtitle=''
    this.error=''
  }



  constructor() { }

  ngOnInit(): void {
  }

}
