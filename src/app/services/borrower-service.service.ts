import { Injectable } from '@angular/core';
import{Borrower} from '../Module/Borrower'

@Injectable({
  providedIn: 'root'
})
export class BorrowerServiceService {
  borrowerList: Borrower[]=[];
  constructor() { 
    this.borrowerList.push(new Borrower(432,323454456,3,"ayelet","ozana","0523433234","sekgk@gmail.com"));
    this.borrowerList.push(new Borrower(333,223453557,4,"bbbb","bnbmbvb","0524444444"));
    this.borrowerList.push(new Borrower(123,343215323,1,"cccc","cvcvcvc","0743345523","trggh@gmail.com"));
    this.borrowerList.push(new Borrower(1234,32300099,3,"dddd","dfgfddd","","yghhj@gmail.com"));
  }
  getAll():Borrower[]{
    return this.borrowerList;
  }
  addBorrower(b:Borrower):void{
    this.borrowerList.push(b);
  }
}
