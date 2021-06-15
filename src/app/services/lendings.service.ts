import { Injectable } from '@angular/core';
import { Lendings } from '../Module/lendings';

@Injectable({
  providedIn: 'root'
})
export class LendingsService {
  lendings: Lendings[]=[];
  constructor() { 
    this.lendings.push(new Lendings(1234,2345,"moshe","levi",1323,"asdfg",new Date(2020,11,2),new Date(2020,12,1)));
    this.lendings.push(new Lendings(1234,2345,"moshe","levi",1323,"asdfg",new Date(2020,1,2),null));
    this.lendings.push(new Lendings(1234,2345,"moshe","levi",1323,"asdfg",new Date(2020,11,2),new Date(2021,1,1)));
    this.lendings.push(new Lendings(1234,2345,"moshe","levi",1323,"asdfg",new Date(2019,11,2),new Date(2020,2,1)));
    this.lendings.push(new Lendings(1234,2345,"moshe","levi",1323,"asdfg",new Date(2020,11,2),new Date(2020,12,1)));
    this.lendings.push(new Lendings(1234,2345,"moshe","levi",1323,"asdfg",new Date(2020,11,2),null));
  }
  getAll():Lendings[]{
    return this.lendings;
  }
  addBorrower(l:Lendings){
    this.lendings.push(l);
  }
}
