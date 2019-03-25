import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
    quote = [
        new Quote(1,'Only dead fish go with the flow','by'),
        new Quote(2,'Nitaambia watu nini','by'),
        new Quote(3, 'Only the good die young','by'),
        new Quote(4, 'No guts, no story','by'),
        new Quote(5, 'Boldness be my friend','by'),
        new Quote(6, 'Screw it, let’s do it','by'),

    ]
    constructor (){}
}


   