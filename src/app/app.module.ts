import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {OrderByPipe} from './pipes/orderBy.pipe';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/util_components/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
