import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,'"Only the good die young." ~ Billy Joel','posted by Joy',new Date(2018,3,14)),
    new Quote(2,'"Nitaambia watu nini." ~ Dj Shiti','posted by Sharon K',new Date(2018,6,9)),
    new Quote(3, '"Only dead fish go with the flow." ~ John .w','posted by Anny',new Date(2018,1,12)),
    new Quote(4, '"No guts no story." ~ Chris Brady','posted by Chris Brian',new Date(2018,3,14)),
    
  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.submitDate = new Date(quote.submitDate)
    this.quotes.push(quote)}

    

    upvote(i){
      this.quotes[i].upvotes+=1
    }
    downvote(i){
      this.quotes[i].downvotes+=1
    }
    
 

deleteQuote(isComplete,index){
  let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

  if (toDelete){
      this.quotes.splice(index,1);
  }} 

toogleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

  constructor() { }

  ngOnInit() {
  }
}


