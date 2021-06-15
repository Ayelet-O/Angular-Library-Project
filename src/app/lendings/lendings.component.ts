import { Component, OnInit } from '@angular/core';
import {Lendings} from '../Module/lendings'
import {LendingsService} from '../services/lendings.service'

@Component({
  selector: 'app-lendings',
  templateUrl: './lendings.component.html',
  styleUrls: ['./lendings.component.css']
})
export class LendingsComponent implements OnInit {

  constructor(private lendings:LendingsService ) { }
  lendingsList:Lendings[]=null;
  ngOnInit(): void {
    this.lendingsList=this.lendings.getAll();
  }
  missingDate(i:number):boolean{
    if(this.lendingsList[i].returnDate==null)
      return true;
    return false;
  }
  returnedBook(lend:Lendings):boolean{
    if(lend.returnDate==null)
      return Number(Date.now())-Number(lend.landingDate) > 30*60*24*1000;
  }
}
