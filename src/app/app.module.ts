import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToLowerCaseDirective } from './shared/dirctives/to-lower-case.directive';
import { CreditCardDirective } from './shared/dirctives/credit-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToLowerCaseDirective,
    CreditCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
