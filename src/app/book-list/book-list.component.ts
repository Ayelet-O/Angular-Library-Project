import { Component, OnInit } from '@angular/core';
import {BookDetails} from '../Module/book-details';
import { BookServiceService } from '../services/book-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  // bookListArr:BookDetails[]=[];
  numOfBooks:number=0;
  bookName:string;
  constructor(private bookS:BookServiceService, private ActivatedRoute:ActivatedRoute) { }
  bookDetailsList:BookDetails[]=null;

  ngOnInit(): void {
    if( this.ActivatedRoute.snapshot.params['id']>0){
      this.ActivatedRoute.params.subscribe(params=>this.bookDetailsList=this.bookS.getCategoryBookById(params.id))
    }
    else{
      this.bookDetailsList=this.bookS.getAll();
    }
    this.numOfBooks=this.bookDetailsList.length;
    // this.ActivatedRoute.params.subscribe(params=>this.bookDetailsList=this.bookS.getCategoryBookById(params.id));
  }
  // bookDetailesById(id:number):number{
  //   this.activetedRouter.params.subscribe(params=>this.bookId=params.id);
  //   return this.bookId;
  // }
  ismissing(i:number):boolean{
    if(this.bookDetailsList[i].id==null||this.bookDetailsList[i].title==""||this.bookDetailsList[i].author=="")
      return true;
    return false;
  }
  massege():void{
    alert("the search results for:"+this.bookName);
  }
}
