import { Component, ChangeDetectionStrategy } from '@angular/core';

export class Hero {
  name: string;
  hp: number;
  rs: number;
  ini: number;
  dead: boolean;
}

// AT, PA, TP, GS, MR/MR, beondere Kampfregeln
const HEROES: Hero[] = [
  { name: 'Schlange 1', hp: 30, rs: 1, ini: 20, dead: false },
  { name: 'Schlange 2', hp: 30, rs: 1, ini: 20, dead: false },
  { name: 'Liscom', hp: 30, rs: 1, ini: 20, dead: false },
  { name: 'Borbarad', hp: 30, rs: 1, ini: 20, dead: false },
  { name: 'Skelett 1', hp: 30, rs: 1, ini: 21, dead: false },
  { name: 'Eridon', hp: 30, rs: 1, ini: 10, dead: false },
  { name: 'Akja', hp: 30, rs: 1, ini: 10, dead: false },
  { name: 'Tharg', hp: 30, rs: 1, ini: 10, dead: false },
  { name: 'Borbarads Mudda', hp: 30, rs: 1, ini: 20, dead: false }
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
  isVisible = false;

  onSelect(hero: Hero): void {
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
