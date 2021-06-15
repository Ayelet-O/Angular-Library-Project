import { Injectable } from '@angular/core';
import{Category} from '../Module/Category';
@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  categoryList: Category[]=[];
  constructor() { 
    this.categoryList.push(new Category(1,"Babies","0-2","red"))
    this.categoryList.push(new Category(2,"Childs","2-14","yellow"))
    this.categoryList.push(new Category(3,"Teens","14-18","green"))
    this.categoryList.push(new Category(4,"Adults","18+","blue"))
  }
  
  getAll():Category[]{
    return this.categoryList;
  }
}
