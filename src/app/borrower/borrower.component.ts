import { Component, OnInit } from '@angular/core';
import {Borrower} from '../Module/Borrower'
import { BorrowerServiceService } from '../services/borrower-service.service';

@Component({
  selector: 'app-borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.css']
})
export class BorrowerComponent implements OnInit {

  constructor(private borrower:BorrowerServiceService) { }
  borrowerList: Borrower[]=null;

  ngOnInit(): void {
    this.borrowerList=this.borrower.getAll();
    
  }
  checkMail(i:number):boolean{
      if(this.borrowerList[i].mail!="")
        return true;
      return false;
  }
  hasPhon(i:number):boolean{
    if(this.borrowerList[i].phon!="")
      return true;
    return false;
  }

}
