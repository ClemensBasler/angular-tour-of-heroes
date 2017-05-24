import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  hp: number;
  rs: number;
  ini: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div></div>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>HP: </label>{{hero.hp-damage+hero.rs}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  <div>
    <label>damage: </label>
    <input tpye="number" [(ngModel)]="damage">
  </div>
  `
})
export class AppComponent {
  title = 'Tour of heroes!';
  damage = 0;
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    hp: 30,
    rs: 2,
    ini: 10
  }
}
