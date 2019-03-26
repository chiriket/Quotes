import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
    quotes = [
        new Quote(1,'Only the good die young','posteby Billy Joel',),
        new Quote(2,'Nitaambia watu nini','by Dj Shiti',),
        new Quote(3, 'Only dead fish go with the flow','by Anny',),
        new Quote(4, 'No guts no story','by Chris Brady',),
    
    ]
   
   constructor(){

  }
}
    


   