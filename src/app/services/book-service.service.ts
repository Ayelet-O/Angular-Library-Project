import { Injectable } from '@angular/core';
import { BookList } from '../Module/book-list';
import { BookListComponent } from '../book-list/book-list.component';
import { BookDetails } from '../Module/book-details';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  bookDetailsList:BookDetails[]=[];
  constructor() { 
    this.bookDetailsList.push(new BookDetails(1323,"Wanted","Y.Sapir","thriller",3,650));
    this.bookDetailsList.push(new BookDetails(7653,"Outcast","M.Kynan","history",2,400));
    this.bookDetailsList.push(new BookDetails(5322,"DinaDay","M.Phoks","dealing with difficulties",2,20));
    this.bookDetailsList.push(new BookDetails(7768,"Alone","H.Levi","Hemona v'bitachon",3,556));
    this.bookDetailsList.push(new BookDetails(9086,"A gift from above","L.Choen","our life",1,100));
  }
  getAll():BookDetails[]{
    return this.bookDetailsList;
  }
  getBook():BookDetails{
    return this.bookDetailsList[0];
  }
  getBookById(i:number):BookDetails{
    for (let index = 0; index < this.bookDetailsList.length; index++) {
      if(this.bookDetailsList[index].id==i){
        return this.bookDetailsList[index];
      }
    }
  }
  getCategoryBookById(i:number):BookDetails[]{
    let b:BookDetails[]=[];
    for (let index = 0; index < this.bookDetailsList.length; index++) {
      if(this.bookDetailsList[index].categoryId==i){
        b.push(this.bookDetailsList[index]);
      }
    }
    return b;
  }
  addBorrower(b:BookDetails):void{
    this.bookDetailsList.push(b);
  }
}
