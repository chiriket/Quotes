import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
    quotes = [
        new Quote(1,'Only the good die young','posted by Billy Joel',),
        new Quote(2,'Nitaambia watu nini','posted by Dj Shiti',),
        new Quote(3, 'Only dead fish go with the flow','posted by Anny',),
        new Quote(4, 'No guts no story','posted by Chris Brady',),
    
    ]
   
   constructor(){

  }
}
    


   