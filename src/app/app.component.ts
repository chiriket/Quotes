import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
    quotes = [
    new Quote(1,'Only the good die young','posted by Billy Joel',new Date(2018,3,14)),
    new Quote(2,'Nitaambia watu nini','posted by Dj Shiti',new Date(2018,6,9)),
    new Quote(3, 'Only dead fish go with the flow','posted by Anny',new Date(2018,1,12)),
    new Quote(4, 'No guts no story','posted by Chris Brady',new Date(2018,3,14)),
    
    ]
   
   constructor(){

  }
}
    


   