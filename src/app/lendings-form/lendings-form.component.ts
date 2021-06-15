import { Component, OnInit } from '@angular/core';
import { Lendings } from '../Module/lendings';
import { LendingsService } from '../services/lendings.service';
import { BookServiceService } from '../services/book-service.service';
import { BookDetails } from '../Module/book-details';
import { Borrower } from '../Module/Borrower';
import { BorrowerServiceService } from '../services/borrower-service.service';

@Component({
  selector: 'app-lendings-form',
  templateUrl: './lendings-form.component.html',
  styleUrls: ['./lendings-form.component.css']
})
export class LendingsFormComponent implements OnInit {
  b:Lendings=new Lendings(463,323454456,"ayelet","ozana",1323,"Wanted",new Date(2020,11,2),new Date(2020,12,1));
  bookList:BookDetails[];
  borowerList:Borrower[];
  constructor(private bookLendings:LendingsService,private bookS:BookServiceService,private borrowerS:BorrowerServiceService) { }

  ngOnInit(): void {
    this.bookList=this.bookS.getAll();
    this.borowerList=this.borrowerS.getAll();
  }
  onSubmit():void{
    this.bookLendings.addBorrower(this.b);
  }
  fillNameSelect():void{
      this.bookList.forEach(element => {
        if(element.id==this.b.bookId){
          this.b.bookTitle=element.title;
        }
      });
  }
  fillIdSelect():void{
    this.bookList.forEach(element => {
          if(element.title==this.b.bookTitle){
            this.b.bookId=element.id;
          }
        });
  }
  fillNamesSelectBorrower():void{
    this.borowerList.forEach(element => {
      if(element.tz==this.b.borrowerId){
        this.b.borrowerFirstName=element.firstName;
        this.b.borrowerLastName=element.lastName;
      }
    });
  }
}
