import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../services/book-service.service';
import {BorrowerServiceService} from '../services/borrower-service.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(private bookS:BookServiceService,private borrow:BorrowerServiceService) { }
  numbooks:number;
  numBorrow:number;
  ngOnInit(): void {
    this.numbooks=this.bookS.bookDetailsList.length;
    this.numBorrow=this.borrow.borrowerList.length;
  }

}
