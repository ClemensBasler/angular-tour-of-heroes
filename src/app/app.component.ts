import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  hp: number;
  rs: number;
  ini: number;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice', hp: 30, rs: 1, ini: 10 },
  { id: 12, name: 'Narco', hp: 30, rs: 1, ini: 9 },
  { id: 13, name: 'Bombasto', hp: 30, rs: 1, ini: 5 },
  { id: 14, name: 'Celeritas', hp: 30, rs: 1, ini: 2 },
  { id: 15, name: 'Magneta', hp: 30, rs: 1, ini: 20 },
  { id: 16, name: 'RubberMan', hp: 30, rs: 1, ini: 11 },
  { id: 17, name: 'Dynama', hp: 30, rs: 1, ini: 200 },
  { id: 18, name: 'Dr IQ', hp: 30, rs: 1, ini: 123 },
  { id: 19, name: 'Magma', hp: 30, rs: 1, ini: 123 },
  { id: 20, name: 'Tornado', hp: 30, rs: 1, ini: 1233 }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes!';
  damage = 0;
  heroes = HEROES;
}
