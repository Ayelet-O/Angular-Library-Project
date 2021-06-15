export class Borrower {
    constructor(id:number,tz:number,ageCategory:number,firstName:string,lastName:string,phon:string="",mail:string=""){
        this.id=id;
        this.tz=tz;
        this.ageCategory=ageCategory;
        this.firstName=firstName;
        this.lastName=lastName;
        this.phon=phon;
        this.mail=mail;
    }
    id:number;
    tz:number;
    ageCategory:number;
    firstName:string;
    lastName:string;
    phon:string;
    mail:string;
}
