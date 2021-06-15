import { Component, OnInit } from '@angular/core';
import {BookDetails} from '../Module/book-details'
import { Category } from '../Module/Category';
import { CategoryServiceService } from '../services/category-service.service';
import { BookServiceService } from '../services/book-service.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  b:BookDetails=new BookDetails(123,"Isterak","M.kynan","history",4,650);
  categoryList:Category[];
  constructor(private categoryService:CategoryServiceService,private bookServies:BookServiceService) { }

  ngOnInit(): void {
    this.categoryList=this.categoryService.getAll();
    
  }
  onSubmit():void{
    this.bookServies.addBorrower(this.b);
  }
}
