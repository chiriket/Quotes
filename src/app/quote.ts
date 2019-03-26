export class Quote {
  public showDetails:boolean;
  public upvotes:number;
  public downvotes:number;
    public showDescription:boolean;
    constructor(public id:number, public name:string, public description:string,public submitDate:Date){
    this.showDescription=false
        this.upvotes = 0
        this.downvotes = 0
}
}
