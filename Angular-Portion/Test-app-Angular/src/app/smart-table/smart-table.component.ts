import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css'],
  
})
export class SmartTableComponent implements OnInit {

  click!:boolean;
  message:string=''

  isClick(){
    this.click=!this.click;
  }
  
   
  



  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  data=[
    {
      id:1,
      name:"zach porras",
      username:"zp567",
      email:"ztp567@gmail.com"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
     
  {
    id: 11,
    name: "Nicholas DuBuque",
    username: "Nicholas.Stanton",
    email: "Rey.Padberg@rosamond.biz"
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}


