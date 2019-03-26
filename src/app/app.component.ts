import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
    quotes = [
    new Quote(1,'"Only the good die young." ~ Billy Joel','posted by Joy',new Date(2018,3,14)),
    new Quote(2,'"Nitaambia watu nini." ~ Dj Shiti','posted by Sharon K',new Date(2018,6,9)),
    new Quote(3, '"Only dead fish go with the flow." ~ John .w','posted by Anny',new Date(2018,1,12)),
    new Quote(4, '"No guts no story" ~ Chris Brady.','posted by Chris Brian',new Date(2018,3,14)),
    
    ]
   
   constructor(){

  }
}
    


   