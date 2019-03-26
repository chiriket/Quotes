import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';


@NgModule({
  declarations: [
    AppComponent,
    StrikethroughDirective,
    QuoteComponent,
    QuoteDetailsComponent,
    
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
