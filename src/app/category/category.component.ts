import { Component, OnInit } from '@angular/core';
import {Category} from '../Module/Category';
import { CategoryServiceService } from '../services/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private category:CategoryServiceService) { }
  categoryList: Category[]=null;

  ngOnInit(): void {
    this.categoryList=this.category.getAll();
  }

}
