import { Component, ChangeDetectionStrategy } from '@angular/core';

export class Hero {
  name: string;
  hp: number;
  rs: number;
  ini: number;
}

const HEROES: Hero[] = [
  { name: 'Mr. Nice', hp: 30, rs: 1, ini: 20 },
  { name: 'Narco', hp: 30, rs: 1, ini: 20 },
  { name: 'Bombasto', hp: 30, rs: 1, ini: 20 },
  { name: 'Celeritas', hp: 30, rs: 1, ini: 20 },
  { name: 'Magneta', hp: 30, rs: 1, ini: 21 },
  { name: 'RubberMan', hp: 30, rs: 1, ini: 10 },
  { name: 'Dynama', hp: 30, rs: 1, ini: 10 },
  { name: 'Dr IQ', hp: 30, rs: 1, ini: 10 },
  { name: 'Magma', hp: 30, rs: 1, ini: 20 },
  { name: 'Tornado', hp: 30, rs: 1, ini: 20 }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Tour of heroes!';
  damage = 0;
  heroes = HEROES;
  selectedHero: Hero;
  onTurn = Hero[0];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  dealDamage(damage): void {
    if (damage > this.selectedHero.rs) {
        this.selectedHero.hp -= (damage - this.selectedHero.rs);
    }
  }
}
