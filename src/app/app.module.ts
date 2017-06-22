import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import {OrderByPipe} from './pipes/orderBy.pipe';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/util_components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/routing_components/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
