import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryServiceService } from '../services/category-service.service';
import { Category } from '../Module/Category';
import { BookServiceService } from '../services/book-service.service';
import { BorrowerServiceService } from '../services/borrower-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrower-form',
  templateUrl: './borrower-form.component.html',
  styleUrls: ['./borrower-form.component.css']
})
export class BorrowerFormComponent implements OnInit {
  myForm = new FormGroup({
    tz: new FormControl('',[Validators.required,Validators.minLength(9),Validators.maxLength(9)]),
    ageCategory: new FormControl('',Validators.required),
    firstName: new FormControl('',[Validators.minLength(2),Validators.required]),
    lastName: new FormControl('',Validators.required),
    phon: new FormControl('', Validators.pattern('(052)|(053)[0-9]{7}')),
    email: new FormControl('',Validators.email)
  });
categoryList:Category[];
  constructor(private categoryService:CategoryServiceService,private borrowerService:BorrowerServiceService,private router:Router) { }

  ngOnInit(): void {
    this.categoryList=this.categoryService.getAll();
  }
  onSubmit():void{
    this.borrowerService.addBorrower(this.myForm.value);
    this.router.navigate(['B_borrower'])
  }
  reset():void{
    this.myForm.reset();
  }
}
