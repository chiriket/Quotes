import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,'Only the good die young','posted by Billy Joel',),
    new Quote(2,'Nitaambia watu nini','posted by Dj Shiti',),
    new Quote(3, 'Only dead fish go with the flow','posted by Anny',),
    new Quote(4, 'No guts no story','posted by Chris Brady',),
    
  ]
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


