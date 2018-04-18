import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NgMasonryGridModule} from 'ng-masonry-grid';
import { TedtComponent } from './tedt/tedt.component';

@NgModule({
  declarations: [
    AppComponent,
    TedtComponent
  ],
  imports: [
    BrowserModule,
    NgMasonryGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
