import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import {OrderByPipe} from './pipes/orderBy.pipe';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/util_components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/routing_components/heroes/heroes.component';
import { FernkampfrechnerComponent } from './components/routing_components/fernkampfrechner/fernkampfrechner.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe,
    HeroDetailComponent,
    HeroesComponent,
    FernkampfrechnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'fernkampfrechner',
        component: FernkampfrechnerComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
