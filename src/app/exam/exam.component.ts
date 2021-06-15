import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myName:string;
  instroction:string='the exam starts in 4 pm, goodLuck!';
  mark:number=7;
  passingMark():void{
    if(this.mark>7)
      alert(this.myName+" passed the exam succesfully!!!")
    else
      alert(this.myName+" didn't passed the exam.")
  }
  questions:string[]=["23*5","46/5","786/14","34%2"];
  isActive():boolean{
    if(this.myName==null)
      return true;
    return false;
  }
  myMark:string;
  massege():boolean{
    if(this.mark==0){
      this.myMark="the min mark";
    }
    else{
      if(this.mark==10){
        this.myMark="the max mark";
      }else
      this.myMark="a madium mark";
    }
    return true;
  }
}
