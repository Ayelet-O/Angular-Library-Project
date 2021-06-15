export class BookDetails {
    constructor(id:number,title:string,author:string,summary:string,categoryId:number,pageCount:number){
        this.id=id;
        this.title=title;
        this.author=author;
        this.summary=summary;
        this.categoryId=categoryId;
        this.pageCount=pageCount;
    }
    id:number;
    title:string;
    author:string;
    summary:string;
    categoryId:number;
    pageCount:number;
}

