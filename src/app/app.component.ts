import { Component, ChangeDetectionStrategy } from '@angular/core';

export class Hero {
  name: string;
  hp: number;
  rs: number;
  ini: number;
  dead: boolean;
  mr1: number;
  mr2: number;
  wunde: number;
  wundschwelle: number;
  AT: number;
  PA: number;
  GS: number;
  FK: number;
}

// beondere Kampfregeln, Counter, neue Kampfrunde, wer ist dran?, Bogen/Armbrust
// Stati farblich => Wunden
// TP!!
// GE sofort um 2 Punkte
const HEROES: Hero[] = [
  { name: 'Schlange 1',
    ini: 20, hp: 30,
    mr1: 7, mr2: 5, wundschwelle: 7,
    rs: 1, wunde: 0, AT: 10, PA: 12, FK: 0, GS: 8,
    dead: false },
  { name: 'Schlange 2', hp: 30, rs: 1, ini: 20,  mr1: 7, mr2: 5, dead: false, wunde: 0, wundschwelle: 7, AT: 10, PA: 12, GS: 8, FK: 0 },
  { name: 'Liscom', hp: 30, rs: 1, ini: 20,  mr1: 7, mr2: 5, dead: false, wunde: 0, wundschwelle: 7, AT: 15, PA: 10, GS: 8, FK: 0 },
  { name: 'Borbarad', hp: 30, rs: 1, ini: 20,  mr1: 7, mr2: 5, dead: false, wunde: 0, wundschwelle: 7, AT: 14, PA: 11, GS: 8, FK: 0 },
  { name: 'Skelett 1', hp: 30, rs: 1, ini: 21,  mr1: 7, mr2: 5, dead: false, wunde: 0, wundschwelle: 7, AT: 12, PA: 12, GS: 8, FK: 0 },
  { name: 'Eridon', hp: 30, rs: 1, ini: 10,  mr1: 7, mr2: 5, dead: false, wunde: 0, wundschwelle: 7, AT: 10, PA: 12, GS: 8, FK: 0 },
  { name: 'Akja', hp: 30, rs: 1, ini: 10,  mr1: 7, mr2: 5, dead: false, wunde: 0, wundschwelle: 7, AT: 10, PA: 12, GS: 8, FK: 0 },
  { name: 'Tharg', hp: 30, rs: 1, ini: 10,  mr1: 7, mr2: 5, dead: false, wunde: 0, wundschwelle: 7, AT: 10, PA: 12, GS: 8, FK: 0 },
  { name: 'Borbarads Mudda', hp: 30, rs: 1, ini: 50,  mr1: 7, mr2: 5, dead: false, wunde: 0, wundschwelle: 7, AT: 10, PA: 12, GS: 8, FK: 0 }
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
  iniDamage = 0;
  ignoreRs = false;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


  //if(this.ignoreRs == true || damage < 0) { effectveRS = 0 } else {blubb}
  dealDamage(damage): void {
    if (this.ignoreRs == true || damage < 0) {
      if(damage > this.selectedHero.wundschwelle){
        let wundenCounter = (damage / this.selectedHero.wundschwelle) -1;
        for(let i = 0; i < wundenCounter; i++){
          console.log(i);
        }
        console.log(damage / this.selectedHero.wundschwelle);
        this.selectedHero.wunde++;
        // let int = damage % Wunde => Anzahl durchläufe => Anzahl der Wunden
        for(let i=0; i <=2; i++){
          this.selectedHero.AT--;
          this.selectedHero.PA--;
          this.selectedHero.ini--;
          this.selectedHero.FK--;
        }
        this.selectedHero.GS--;
      }
      this.selectedHero.hp -= damage;

      if(this.selectedHero.hp > 0){
        this.selectedHero.dead = false;
      }
      this.ignoreRs = false;
    } else if (damage > this.selectedHero.rs) {
      if(damage > this.selectedHero.wundschwelle + this.selectedHero.rs){
        this.selectedHero.wunde++;
        for(let i=0; i < 2; i++){
          this.selectedHero.AT--;
          this.selectedHero.PA--;
          this.selectedHero.ini--;
          this.selectedHero.FK--;
        }
        this.selectedHero.GS--;
      }
        this.selectedHero.hp -= (damage - this.selectedHero.rs);
    }
    if(this.selectedHero.hp < 0){
      this.selectedHero.dead = true;
    }
    this.damage = 0;
  }

  dealIniDamage(iniDamage): void {
        this.selectedHero.ini -= iniDamage;
        this.iniDamage = 0;
  }

}
