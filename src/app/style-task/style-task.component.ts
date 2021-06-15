import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-task',
  templateUrl: './style-task.component.html',
  styleUrls: ['./style-task.component.css']
})
export class StyleTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myName:string;
  isActive():boolean{
    if(this.myName==null)
      return false;
    return true;
  }
}
