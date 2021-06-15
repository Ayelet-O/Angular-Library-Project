import {BookDetails} from '../Module/book-details'
export class BookList {
    constructor(id:number,title:string,author:string,summarye:string,ageCategory:number,pageCount:number){
        this.id=id;
        this.title=title;
        this.author=author;
        this.summarye=summarye;
        this.ageCategory=ageCategory;
        this.pageCount=pageCount;
    }
    id:number;
    title:string;
    author:string;
    summarye:string;
    ageCategory:number;
    pageCount:number;
}
