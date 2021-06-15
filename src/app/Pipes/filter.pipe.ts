import { Pipe, PipeTransform } from '@angular/core'
import {BookList} from '../Module/book-list'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(BookList: BookList[], value: string): BookList[] {
    var searchArr=[];
    if(value!=null){
      for (let i = 0; i < BookList.length; i++) {
        if(BookList[i].title.indexOf(value)!=-1){
          searchArr.push(BookList[i]);
        }
      }
    }
    else{
      return BookList;
    }
    return searchArr;
  }
}
