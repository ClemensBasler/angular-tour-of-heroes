import { Component, ChangeDetectionStrategy, OnInit} from '@angular/core';

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
  TP: {
    diceCounter: number;
    diceArt: number;
    bonusdmg: number;
  }
  onTurn: boolean;
}

// beondere Kampfregeln, Counter, neue Kampfrunde, Bogen/Armbrust TP
// Stati farblich => Wunden
// GE sofort um 2 Punkte
// Neuer Feind/Held eintragen!!!!!!!!
// wer ist dran?
// vorher!! nach Ini sortieren
const HEROES: Hero[] = [
  { name: 'Schlange 1',
    ini: 20, hp: 30,
    mr1: 7, mr2: 5, wundschwelle: 7,
    rs: 1, wunde: 0, AT: 10, PA: 12, FK: 0, GS: 8,
    dead: false,
    TP: {
      diceCounter: 1,
      diceArt: 6,
      bonusdmg: 5
    }, onTurn: false
   },
  { name: 'Schlange 2', hp: 30, rs: 1, ini: 20,  mr1: 7, mr2: 5, dead: false, wunde: 0, wundschwelle: 7, AT: 10, PA: 12, GS: 8, FK: 0,
  TP: {
    diceCounter: 1,
    diceArt: 6,
    bonusdmg: 5
  }, onTurn: false },
  { name: 'Liscom', hp: 30, rs: 1, ini: 20,  mr1: 7, mr2: 5, dead: false,
  wunde: 0, wundschwelle: 7, AT: 15, PA: 10, GS: 8, FK: 0,
  TP: {
    diceCounter: 1,
    diceArt: 6,
    bonusdmg: 5
  }, onTurn: false },
  { name: 'Borbarad', hp: 30, rs: 1, ini: 20,  mr1: 7, mr2: 5, dead: false,
  wunde: 0, wundschwelle: 7, AT: 14, PA: 11, GS: 8, FK: 0,
  TP: {
    diceCounter: 1,
    diceArt: 6,
    bonusdmg: 5
  }, onTurn: false },
  { name: 'Skelett 1', hp: 30, rs: 1, ini: 21,  mr1: 7, mr2: 5,
  dead: false, wunde: 0, wundschwelle: 7, AT: 12, PA: 12, GS: 8, FK: 0,
  TP: {
    diceCounter: 1,
    diceArt: 6,
    bonusdmg: 5
  }, onTurn: false },
  { name: 'Eridon', hp: 30, rs: 1, ini: 10,  mr1: 7, mr2: 5, dead: false,
  wunde: 0, wundschwelle: 7, AT: 10, PA: 12, GS: 8, FK: 0,
  TP: {
    diceCounter: 1,
    diceArt: 6,
    bonusdmg: 5
  }, onTurn: false },
  { name: 'Akja', hp: 30, rs: 1, ini: 10,  mr1: 7, mr2: 5,
  dead: false, wunde: 0, wundschwelle: 7, AT: 10, PA: 12, GS: 8, FK: 0,
  TP: {
    diceCounter: 1,
    diceArt: 6,
    bonusdmg: 5
  }, onTurn: false },
  { name: 'Tharg', hp: 30, rs: 1, ini: 10,  mr1: 7, mr2: 5, dead: false,
  wunde: 0, wundschwelle: 7, AT: 10, PA: 12, GS: 8, FK: 0,
  TP: {
    diceCounter: 1,
    diceArt: 6,
    bonusdmg: 5
  }, onTurn: false },
  { name: 'Borbarads Mudda', hp: 30, rs: 1, ini: 50,  mr1: 7, mr2: 5, dead: false,
  wunde: 0, wundschwelle: 7, AT: 10, PA: 12, GS: 8, FK: 0,
  TP: {
    diceCounter: 1,
    diceArt: 6,
    bonusdmg: 5
  }, onTurn: false }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'Tour of heroes!';
  damage = 0;
  heroes = HEROES;
  selectedHero: Hero;
  onTurn = Hero[0];
  isVisible = false;
  iniDamage = 0;
  ignoreRs = false;

  turnOfHero: Hero;
  turn = 0;
  heroPos = 0;

  ngOnInit() {
  this.heroes[this.turn].onTurn = true;

  for(let i = 0; i < this.heroes.length; i++){
    if(this.heroes[this.heroPos].ini < this.heroes[i].ini){
      this.heroPos = i;
    }
    console.log(this.heroPos);
    console.log(this.heroes[this.heroPos].name);
    }
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  nextFighter(){
    this.heroes[this.turn].onTurn = false;
    this.turn++;
    if(this.turn >= this.heroes.length){
      this.turn = 0;
    }
    this.heroes[this.turn].onTurn = true;

  for(let i = 0; i < this.heroes.length; i++){
    if(this.heroes[this.heroPos].ini < this.heroes[i].ini){
      this.heroPos = i;
    }
    console.log(this.heroPos);
    console.log(this.heroes[this.heroPos].name);
    }
  }

  dealDamage(damage): void {

    let effectiveRs = this.selectedHero.rs;

    if (this.ignoreRs == true || damage < 0) {
      effectiveRs = 0;
    }

    if(damage > this.selectedHero.wundschwelle + effectiveRs){
      let wundenCounter = ((damage-effectiveRs) / this.selectedHero.wundschwelle) -1;
      for(let i = 0; i < wundenCounter; i++){
      this.selectedHero.wunde++;
        for(let i=0; i < 2; i++){
          this.selectedHero.AT--;
          this.selectedHero.PA--;
          this.selectedHero.ini--;
          this.selectedHero.FK--;
        }
      this.selectedHero.GS--;
      }
    }
    this.selectedHero.hp -= (damage - effectiveRs);

    if(this.selectedHero.hp < 0){
      this.selectedHero.dead = true;
    }
    this.ignoreRs = false;
    this.damage = 0;
  }

  dealIniDamage(iniDamage): void {
        this.selectedHero.ini -= iniDamage;
        this.iniDamage = 0;
  }

}
