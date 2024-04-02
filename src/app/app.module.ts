import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TitleCasePipe} from './title-case.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TitleCasePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpperCasePipe,
    LowerCasePipe,
    DecimalPipe,
    PercentPipe,
    SlicePipe,
    CurrencyPipe,
    JsonPipe,
    DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
