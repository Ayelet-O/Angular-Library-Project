import { Component, OnInit } from '@angular/core';
import {BookDetails} from '../Module/book-details'
import { BookServiceService } from '../services/book-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  constructor(private bookS:BookServiceService, private ActivatedRoute:ActivatedRoute) { }
  book:BookDetails;
  ngOnInit(): void {
    //this.book=this.bookS.getBook();
    this.ActivatedRoute.params.subscribe(params=>this.book=this.bookS.getBookById(params.id));
  }
}