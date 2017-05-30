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
  styleUrls: ['./app.component.css']
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
