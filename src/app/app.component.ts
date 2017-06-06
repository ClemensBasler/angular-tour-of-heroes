import { Component, ChangeDetectionStrategy } from '@angular/core';

export class Hero {
  name: string;
  hp: number;
  rs: number;
  ini: number;
  dead: boolean;
}

const HEROES: Hero[] = [
  { name: 'Mr. Nice', hp: 30, rs: 1, ini: 20, dead: false },
  { name: 'Narco', hp: 30, rs: 1, ini: 20, dead: false },
  { name: 'Bombasto', hp: 30, rs: 1, ini: 20, dead: false },
  { name: 'Celeritas', hp: 30, rs: 1, ini: 20, dead: false },
  { name: 'Magneta', hp: 30, rs: 1, ini: 21, dead: false },
  { name: 'RubberMan', hp: 30, rs: 1, ini: 10, dead: false },
  { name: 'Dynama', hp: 30, rs: 1, ini: 10, dead: false },
  { name: 'Dr IQ', hp: 30, rs: 1, ini: 10, dead: false },
  { name: 'Magma', hp: 30, rs: 1, ini: 20, dead: false },
  { name: 'Tornado', hp: 30, rs: 1, ini: 20, dead: false }
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
  test = 1;
  isVisible = false;

  onSelect(hero: Hero): void {
    this.test = hero.hp;
    this.selectedHero = hero;
  }

  dealDamage(damage): void {
    if (damage > this.selectedHero.rs) {
        this.selectedHero.hp -= (damage - this.selectedHero.rs);
    }
    if(this.selectedHero.hp < 0){
      this.selectedHero.dead = true;
    }
    this.damage = 0;
  }
}
